import { RightContainer, Wrapper } from './HomePage';
import LeftContainer from './LeftContainer';
import UserForm from './UserForm';
import styled from 'styled-components';
import ImageUploader from './ImageUploader';
import RightFloatingMenu from './RightFloatingMenu';
import { showImage, updateDocument, uploadImage } from './firebase/utils';
import { useEffect, useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';

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

  .alert {
    text-align: center;
    padding: 20px;
    background-color: rgba(135, 140, 155, 0.3);
    border-radius: 2px;
    position: relative;
    color: #fff;
    svg{
      cursor: pointer
      position: absolute;
    }
  }
`;

const ProfileCard = styled.div`
  display: flex;
  // border: 1px solid;
  width: 350px;
  gap: 20px;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;

    border-radius: 50%;
  }
`;

const UserPage = ({ userData }) => {
  const [image, setImage] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [alert, setAlert] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageVal = await uploadImage('agents', displayName, image);

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

  /* useEffect(() => {
    const userImage = async () => {
      const imageItem = await showImage();

      console.log(imageItem);
    };

    userImage();
  }, []); */

  return (
    <Wrapper>
      <LeftContainer
        bgImage={'smiling-agent.jpg'}
        overlayValue={'rgba(0, 0, 0, 0.3)'}
        content={<UserForm user={userData} width={'80%'} />}
      />
      <RightContainer>
        <RightFloatingMenu user={userData} bgColor={'#070C1F'} />
        <ProfileCard>
          <img src={userData.image} alt="agent" />
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
          {alert && (
            <div className="alert">
              {alert} <FaWindowClose />
            </div>
          )}
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
