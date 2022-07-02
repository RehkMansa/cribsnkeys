import { useState } from 'react';
import styled from 'styled-components';
import { saveWithAutoID, uploadImage } from './firebase/utils';
import FormAlert from './FormAlert';
import ImageUploader from './ImageUploader';

const FormWrapper = styled.form`
  gap: 20px;
  width: ${(props) => props.formWidth};
  h3 {
    text-align: center;
    font-size: 38px;
    margin-bottom: 20px;
    color: var(--gold);
  }

  input,
  button {
    border-radius: 10px;
    padding: 15px;
    color: #000;
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
    min-height: 100px;
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
  const [alert, setAlert] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    const img = await uploadImage('cribs', user.displayName, image);

    if (img) {
      const data = {
        title: title,
        price: price,
        desc: desc,
        location: location,
        image: img.imageURL,
      };

      const cribsRef = await saveWithAutoID('cribs', data);

      setAlert(`Your Crib ID: ${cribsRef}`);
    } else {
      setAlert('An error occurred');
    }

    setTitle('');
    setPrice('');
    setDesc('');
    setLocation('');
    setImage('');
  };

  return (
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
        <input
          value={price}
          onChange={(e) => {
            setPrice(e.currentTarget.value);
          }}
          type="text"
          placeholder="Price In NGN"
          id=""
        />
        {!price && <h5 className="labelAbsolute">Enter Price Per Night</h5>}
      </Row>
      <Row>
        <input
          value={location}
          onChange={(e) => {
            setLocation(e.currentTarget.value);
          }}
          type="text"
          placeholder="Location"
          id=""
        />
        {!location && <h5 className="labelAbsolute">Enter The Location</h5>}
      </Row>
      <Row>
        <textarea
          value={desc}
          onChange={(e) => {
            setDesc(e.currentTarget.value);
          }}
          type="text"
          placeholder="Short Description about the crib"
          id=""
        />
      </Row>
      <ImageUploader
        value={image}
        onClickFunc={(acceptedFiles) => {
          setImage(acceptedFiles[0]);
        }}
        title={'Upload An Image Of The Room'}
      />
      <button>Submit</button>
    </FormWrapper>
  );
};

export default CreateCrib;
