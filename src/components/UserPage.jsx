import { RightContainer, Wrapper } from './HomePage';
import LeftContainer from './LeftContainer';
import UserForm from './UserForm';

const UserPage = () => {
  return (
    <Wrapper>
      <LeftContainer
        bgImage={'smiling-agent.jpg'}
        overlayValue={'rgba(0, 0, 50, 0.1)'}
        content={<UserForm />}
      />
      <RightContainer>
        <h3>Hello</h3>
      </RightContainer>
    </Wrapper>
  );
};

export default UserPage;
