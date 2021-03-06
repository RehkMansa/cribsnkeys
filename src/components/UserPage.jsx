import { RightContainer, Wrapper } from './HomePage';
import LeftContainer from './LeftContainer';
import UserForm from './UserForm';
import styled from 'styled-components';
import ImageUploader from './ImageUploader';
import { updateDocument, uploadImage } from './firebase/utils';
import { useState } from 'react';
import FormAlert from './FormAlert';
import Error404 from './Error404';
import LoadGif from './LoadGif';

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
  gap: 20px;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
  }

  @media (max-width: 600px) {
    h3 {
      font-size: 30px;
    }

    font-size: 16px;
  }
`;

const UserPage = ({ userData }) => {
  const [image, setImage] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [alert, setAlert] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowLoader(true);
    const imageVal = await uploadImage('profile-images', displayName, image);

    console.log(imageVal);

    if (imageVal) {
      const data = {
        displayName: displayName,
        image: imageVal.imageURL,
      };

      await updateDocument('users', userData.uid, data);

      setAlert('Profile updated Successfully');
      setShowLoader(false);
    } else {
      setAlert('An error occurred');
      setShowLoader(false);
    }
    setDisplayName('');
  };

  return (
    <Wrapper>
      {userData ? (
        <>
          <LeftContainer
            bgImage={'smiling-agent.jpg'}
            overlayValue={'rgba(0, 0, 0, 0.4)'}
            content={<UserForm user={userData} />}
          />
          <RightContainer>
            {showLoader ? (
              <LoadGif />
            ) : (
              <>
                <ProfileCard>
                  <img
                    src={
                      userData.image
                        ? userData.image
                        : '/images/default-user.jpg'
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
                    clickFunc={(acceptedFiles) => {
                      setImage(acceptedFiles[0]);
                    }}
                    className={'uploadImage'}
                    title={'Click To Upload Profile Image'}
                  />
                  <button>Submit</button>
                </FormWrapper>
              </>
            )}
          </RightContainer>
        </>
      ) : (
        <Error404 title={'Please Login'} style={{ width: '100%' }} />
      )}
    </Wrapper>
  );
};

export default UserPage;
