import { RightContainer, Wrapper } from './HomePage';
import LeftContainer from './LeftContainer';
import UserForm from './UserForm';
import styled from 'styled-components';
import ImageUploader from './ImageUploader';
import RightFloatingMenu from './RightFloatingMenu';
import { updateDocument, uploadImage } from './firebase/utils';
import { useState } from 'react';
import FormAlert from './FormAlert';
import Error404 from './Error404';

const FormWrapper = styled.form`
  .uploadImage {
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid hsla(228, 63%, 7%, 0.8);
  }

  & > * {
    margin: 5px 0;
  }

  button {
    color: var(--blue);
  }
`;

const ProfileCard = styled.div`
  display: flex;
  // width: 350px;
  gap: 20px;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    // border: 1px solid;

    border-radius: 50%;
  }
`;

const UserPage = ({ userData }) => {
  const [image, setImage] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [alert, setAlert] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageVal = await uploadImage('profile-images', displayName, image);

    console.log(imageVal);

    if (imageVal) {
      const data = {
        displayName: displayName,
        image: imageVal.imageURL,
      };

      const echoMe = await updateDocument('users', userData.uid, data);

      setAlert('Profile updated Successfully');
    } else {
      setAlert('An error occurred');
    }
    setDisplayName('');
  };

  return (
    <Wrapper>
      {userData ? (
        <>
          <LeftContainer
            bgImage={'smiling-agent.jpg'}
            overlayValue={'rgba(0, 0, 0, 0.3)'}
            content={<UserForm user={userData} width={'80%'} />}
          />
          <RightContainer>
            <ProfileCard>
              <img
                src={
                  userData.image ? userData.image : '/images/default-user.jpg'
                }
                alt={userData.displayName}
              />
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
              </div>
            </ProfileCard>

            <FormWrapper onSubmit={handleSubmit} className="form-flex">
              <FormAlert alertState={setAlert} alertVar={alert} />
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
        </>
      ) : (
        <Error404 title={'Please Login'} style={{ width: '100%' }} />
      )}
    </Wrapper>
  );
};

export default UserPage;
