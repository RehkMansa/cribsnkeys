import { useState } from 'react';
import styled from 'styled-components';
import { saveWithID, uploadImage } from './firebase/utils';
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
    color: #000;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  position: relative;

  .labelAbsolute {
    position: absolute;
    right: 50px;
    top: 13px;
    font-family: karla;
    font-weight: 500;
    color: var(--grey);
  }
`;

const CreateCrib = ({ width, user }) => {
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
  const [alert, setAlert] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const imageVal = await uploadImage('profile-images', username, image);

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

      setAlert('Congratulations on your Sign up');
    } else {
      setAlert('An error occurred, please try again');
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
        id=""
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
          id=""
        />
        <h5 className="labelAbsolute">Select Age</h5>
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
          id=""
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
          id=""
        />
        <input
          value={street}
          onChange={(e) => {
            setStreet(e.currentTarget.value);
          }}
          type="text"
          name=""
          placeholder="Street"
          id=""
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
        id=""
      />
      <ImageUploader
        value={image}
        onClickFunc={(acceptedFiles) => {
          setImage(acceptedFiles[0]);
        }}
        title={'Click To Upload Profile Picture'}
      />
      <button>Submit</button>
    </FormWrapper>
  );
};

export default CreateCrib;
