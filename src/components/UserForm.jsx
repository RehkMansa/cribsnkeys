import { useState } from 'react';
import styled from 'styled-components';
import Error404 from './Error404';
import { saveWithID, updateDocument, uploadImage } from './firebase/utils';
import FormAlert from './FormAlert';
import ImageUploader from './ImageUploader';
import LoadGif from './LoadGif';

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
    color: #000;
  }

  @media (max-width: 600px) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items:start;
    justify-content:center;

    & >*{
      width: 100%;
    }

    h3{
      font-size: 30px;
    }
  }
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  position: relative;

  .labelAbsolute {
    position: absolute;
    right: 20px;
    top: 13px;
    font-family: karla;
    font-weight: 500;
    color: var(--grey);
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const UserForm = ({ width, user }) => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [alert, setAlert] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowLoader(true);
    const imageVal = await uploadImage('profile-images', username, image);

    const updateUser = {
      role: 'agent',
    };

    await updateDocument('users', user.uid, updateUser);

    if (imageVal) {
      const data = {
        name: {
          firstName: firstName,
          middleName: middleName,
          surname: surname,
        },
        contact: {
          phoneNumber: phone,
          email: user.email,
        },
        location: {
          state: state,
          city: city,
          street: street,
          address: address,
        },
        user: {
          image: imageVal.imageURL,
          uid: user.uid,
        },
      };
      await saveWithID('agents', user.uid, data);

      setShowLoader(false);
      setAlert('Congratulations on your Sign up');
    } else {
      setAlert('An error occurred, please try again');
      setShowLoader(false);
    }
    setFirstName('');
    setMiddleName('');
    setSurname('');
    setUsername('');
    setPhone('');
    setDob('');
    setState('');
    setCity('');
    setStreet('');
    setAddress('');
    setImage('');
    setAlert('');
  };

  return (
    <>
      {user ? (
        user.role === 'agent' ? (
          <Error404
            title={'Agent Registration Complete'}
            style={{ textAlign: 'center' }}
            buttonText={'Post Crib'}
            link={'/cribs'}
          />
        ) : showLoader ? (
          <LoadGif />
        ) : (
          <FormWrapper
            onSubmit={handleSubmit}
            formWidth={width}
            className="form-flex"
          >
            <h3>Do you want to be an agent ?</h3>
            <FormAlert
              bgColor={'rgba(7, 12, 31, 0.8)'}
              alertState={setAlert}
              alertVar={alert}
            />
            <Row>
              <input
                type="text"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.currentTarget.value);
                }}
                required
                placeholder="First Name"
              />
              <input
                type="text"
                value={middleName}
                onChange={(e) => {
                  setMiddleName(e.currentTarget.value);
                }}
                required
                placeholder="Middle name"
              />
              <input
                value={surname}
                onChange={(e) => {
                  setSurname(e.currentTarget.value);
                }}
                type="text"
                required
                placeholder="Surname"
              />
            </Row>
            <input
              value={username}
              onChange={(e) => {
                setUsername(e.currentTarget.value);
              }}
              type="text"
              required
              name=""
              placeholder="Enter Username"
            />
            <input
              value={phone}
              onChange={(e) => {
                setPhone(e.currentTarget.value);
              }}
              type="tel"
              required
              name=""
              placeholder="Phone number"
            />
            <Row>
              <input
                value={dob}
                onChange={(e) => {
                  setDob(e.currentTarget.value);
                }}
                type="date"
                name=""
                placeholder="Age"
              />
              {!dob && <h5 className="labelAbsolute">Select Age</h5>}
            </Row>
            <h4>Location Details</h4>
            <Row>
              <input
                value={state}
                onChange={(e) => {
                  setState(e.currentTarget.value);
                }}
                type="text"
                required
                name=""
                placeholder="State"
              />
              <input
                value={city}
                onChange={(e) => {
                  setCity(e.currentTarget.value);
                }}
                type="text"
                required
                name=""
                placeholder="City"
              />
              <input
                value={street}
                onChange={(e) => {
                  setStreet(e.currentTarget.value);
                }}
                type="text"
                name=""
                placeholder="Street"
              />
            </Row>
            <input
              value={address}
              onChange={(e) => {
                setAddress(e.currentTarget.value);
              }}
              type="text"
              name=""
              placeholder="Home Address"
            />
            <ImageUploader
              value={image}
              required
              clickFunc={(acceptedFiles) => {
                setImage(acceptedFiles[0]);
              }}
              title={'Click To Upload Profile Picture'}
            />
            <button>Submit</button>
          </FormWrapper>
        )
      ) : (
        <Wrapper className="flex20 center column">
          <h3 style={{ fontSize: '40px' }}>Log In to view actions</h3>
          <LoadGif />
        </Wrapper>
      )}
    </>
  );
};

export default UserForm;
