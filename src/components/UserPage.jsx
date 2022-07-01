import { RightContainer, Wrapper } from './HomePage';
import LeftContainer from './LeftContainer';
import UserForm from './UserForm';
import styled from 'styled-components';
import ImageUploader from './ImageUploader';
import RightFloatingMenu from './RightFloatingMenu';
import { updateDocument, uploadImage } from './firebase/utils';
import { useState } from 'react';

const FormWrapper = styled.form`
  .uploadImage {
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid hsla(228, 63%, 7%, 0.8);
    padding: 30px 30px;
  }

  & > * {
    margin: 5px 0;
  }

  button {
    color: var(--blue);
  }
`;

const UserPage = ({ userData }) => {
  const [image, setImage] = useState('');
  const [displayName, setDisplayName] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageVal = await uploadImage('agents', displayName, image);

    if (imageVal) {
      const data = {
        displayName: displayName,
        image: imageVal.ref.fullPath,
      };

      const echoMe = await updateDocument('users', userData.uid, data);

      console.log(echoMe);
    } else {
      alert('An error occurred');
    }
  };
  return (
    <Wrapper>
      <LeftContainer
        bgImage={'smiling-agent.jpg'}
        overlayValue={'rgba(0, 0, 0, 0.3)'}
        content={<UserForm user={userData} width={'80%'} />}
      />
      <RightContainer>
        <RightFloatingMenu user={userData} bgColor={'#070C1F'} />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '20px',
            flexDirection: 'column',
          }}
        >
          <h3>Hello</h3>
          <p>
            {' '}
            {userData.displayName === undefined
              ? userData.email
              : userData.displayName}{' '}
          </p>
        </div>
        <FormWrapper onSubmit={handleSubmit} className="form-flex">
          <input
            required
            value={displayName}
            onChange={(e) => {
              setDisplayName(e.currentTarget.value);
            }}
            type="text"
            placeholder="Enter username"
          />
          <ImageUploader
            onClickFunc={(acceptedFiles) => {
              setImage(acceptedFiles[0]);
            }}
            className={'uploadImage'}
            title={'Click To Upload Profile Image'}
          />
          <button>Submit</button>
        </FormWrapper>
      </RightContainer>
    </Wrapper>
  );
};

export default UserPage;
