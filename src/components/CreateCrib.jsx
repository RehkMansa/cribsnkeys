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
    right: 10px;
    top: 7px;
    font-family: karla;
    font-weight: 500;
    color: rgba(70, 70, 70, 0.89);
    background-color: rgba(70, 70, 70, 0.13);
    padding: 5px 10px;
    border-radius: 20px;
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
      <h3>Create New Apartment Listing ?</h3>
      <FormAlert
        bgColor={'rgba(7, 12, 31, 0.8)'}
        alertState={setAlert}
        alertVar={alert}
      />
      <Row>
        <input
          value={dob}
          onChange={(e) => {
            setDob(e.currentTarget.value);
          }}
          type="text"
          name=""
          placeholder="Age"
          id=""
        />
        <h5 className="labelAbsolute">Select Age</h5>
      </Row>
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
