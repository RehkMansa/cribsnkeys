import { useState } from 'react';
import NumberFormat from 'react-number-format';
import styled from 'styled-components';
import Error404 from './Error404';
import { saveWithAutoID, uploadImage } from './firebase/utils';
import FormAlert from './FormAlert';
import ImageUploader from './ImageUploader';
import LoadGif from './LoadGif';

const FormWrapper = styled.form`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  gap: 20px;
  width: ${(props) => props.formWidth};
  h3 {
    text-align: center;
    font-size: 38px;
    margin-bottom: 20px;
    color: var(--gold);
  }

  .image-uploader {
    .text-content {
      padding: 20px;
    }
  }
  input,
  button {
    border-radius: 10px;
    padding: 15px;
    color: #000;
  }

  .column {
    flex-direction: column;
  }

  .row {
    display: flex;
    gap: 10px;
  }
`;
const AmenitiesForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  .row-modified {
    display: flex;
    width: 100%;
    & > button {
      width: 40%;
    }
  }

  .labelAbsolute {
    font-family: karla;
    font-weight: 500;
    font-size: 15px;
    color: rgba(70, 70, 70, 0.89);
    background-color: #e7e7e7;
    padding: 5px 10px;
    border-radius: 20px;
    width: auto;
  }
`;
const Row = styled.div`
  display: flex;
  gap: 20px;
  position: relative;

  .labelAbsolute {
    position: absolute;
    right: 15px;
    top: 27%;
    font-family: karla;
    font-weight: 500;
    color: rgba(70, 70, 70, 0.89);
    background-color: rgba(70, 70, 70, 0.13);
    padding: 5px 10px;
    border-radius: 20px;
  }

  textarea {
    width: 100%;
    padding: 15px;
    outline: none;
    min-height: 70px;
    border-radius: 10px;
    border: none;
  }
`;

const CreateCrib = ({ width, user }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');
  const [amenities, setAmenities] = useState('');
  const [alert, setAlert] = useState('');
  const [amenitiesArr, setAmenitiesArr] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  const convertStringToArr = (string, setArr) => {
    const newArr = string.split(', ');
    setArr(newArr);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowLoader(true);
    const img = await uploadImage('cribs', user.displayName, image);
    console.log(img);
    if (img) {
      const data = {
        title: title,
        price: price,
        desc: desc,
        location: location,
        image: img.imageURL,
        agent: user,
        amenities: amenitiesArr,
      };

      console.log(data);

      const cribsRef = await saveWithAutoID('cribs', data);

      setAlert(`Your Crib ID: ${cribsRef}`);
      setShowLoader(false);
    } else {
      setAlert('An error occurred');
    }

    setTitle('');
    setPrice('');
    setDesc('');
    setLocation('');
    setImage('');
    setAmenities('');
    setAmenitiesArr([]);
    setShowLoader(false);

    console.log('submitted');
  };

  return (
    <>
      {user && user.role === 'agent' ? (
        showLoader !== false ? (
          <LoadGif />
        ) : (
          <FormWrapper
            onSubmit={handleSubmit}
            formWidth={width}
            className="form-flex"
          >
            <h3>Create New Apartment Listing ?</h3>
            <FormAlert
              bgColor={'rgba(7, 12, 31, 0.8)'}
              alertState={setAlert}
              alertVar={alert}
            />
            <Row>
              <input
                required
                value={title}
                onChange={(e) => {
                  setTitle(e.currentTarget.value);
                }}
                type="text"
                placeholder="Title"
                id=""
              />
              {!title && <h5 className="labelAbsolute">Please Enter Title</h5>}
            </Row>
            <Row>
              <NumberFormat
                value={price}
                thousandSeparator={true}
                prefix={'₦ '}
                onValueChange={(values) => {
                  const { value } = values;
                  setPrice(value);
                }}
              />
              {!price && (
                <h5 className="labelAbsolute">Enter Price Per Night</h5>
              )}
            </Row>
            <Row>
              <input
                value={location}
                required
                onChange={(e) => {
                  setLocation(e.currentTarget.value);
                }}
                type="text"
                placeholder="Location"
                id=""
              />
              {!location && (
                <h5 className="labelAbsolute">Enter The Location</h5>
              )}
            </Row>
            <AmenitiesForm>
              {!amenities && (
                <span className="labelAbsolute">
                  Add individual values separated with a comma, e.g 2 rooms, 1
                  toilet
                </span>
              )}
              {amenitiesArr.length >= 0 && amenities !== '' ? (
                <div className="row">
                  {amenitiesArr.map((amenity, n) => (
                    <span key={n} className="labelAbsolute">
                      {amenity}
                    </span>
                  ))}
                </div>
              ) : (
                ''
              )}
              <Row className="row-modified">
                <input
                  value={amenities}
                  required
                  onChange={(e) => {
                    setAmenities(e.currentTarget.value);

                    convertStringToArr(e.currentTarget.value, setAmenitiesArr);
                  }}
                  type="text"
                  placeholder="Amenities"
                  id=""
                />
              </Row>
            </AmenitiesForm>
            <Row>
              <textarea
                value={desc}
                required
                onChange={(e) => {
                  setDesc(e.currentTarget.value);
                }}
                type="text"
                placeholder="Short Description about the crib"
                id=""
              />
            </Row>
            <ImageUploader
              className={'image-uploader'}
              value={image}
              required
              clickFunc={(acceptedFiles) => {
                setImage(acceptedFiles[0]);
              }}
              title={'Upload An Image Of The Room'}
            />
            <button>Submit</button>
          </FormWrapper>
        )
      ) : (
        <Error404
          title={'Sign up as agent to post crib'}
          style={{ textAlign: 'center' }}
          buttonText={'Sign Up'}
          link={'/user'}
        />
      )}
    </>
  );
};

export default CreateCrib;
