import { RightContainer, Wrapper } from './HomePage';
import LeftContainer from './LeftContainer';
import UserForm from './UserForm';
import styled from 'styled-components';
import ImageUploader from './ImageUploader';
import RightFloatingMenu from './RightFloatingMenu';

const FormWrapper = styled.div`
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
  return (
    <Wrapper>
      <LeftContainer
        bgImage={'smiling-agent.jpg'}
        overlayValue={'rgba(0, 0, 0, 0.3)'}
        content={<UserForm width={'80%'} />}
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
        <FormWrapper className="form-flex">
          <input type="text" placeholder="Enter username" />
          <ImageUploader
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
