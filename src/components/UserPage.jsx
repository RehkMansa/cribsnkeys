import { RightContainer, Wrapper } from './HomePage';
import LeftContainer from './LeftContainer';
import UserForm from './UserForm';
import styled from 'styled-components';
import ImageUploader from './ImageUploader';
import RightFloatingMenu from './RightFloatingMenu';

const FormWrapper = styled.div`
  .uploadImage {
    background-color: rgba(242, 182, 54, 0.99);
    color: var(--blue);
  }
   
  & > *{
    margin: 5px 0;
  }

  button {
    color: var(--gold);
    border: 2px solid var(--gold);
    background-color: transparent;
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
        <RightFloatingMenu user={userData} />
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
              : userData.displayName}
          </p>
        </div>
        <h4>Fill the form to complete user sign up</h4>
        <FormWrapper className="form-flex">
          <input type="text" placeholder="Enter A Display Name" />
          <ImageUploader
            className={'uploadImage'}
            title={'Click To Upload A Profile Image'}
          />
          <button>Submit</button>
        </FormWrapper>
      </RightContainer>
    </Wrapper>
  );
};

export default UserPage;
