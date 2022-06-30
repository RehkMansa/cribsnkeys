import styled from 'styled-components';
import { RightContainer, Wrapper } from './HomePage';
import LeftContainer from './LeftContainer';


const UserPage = () => {
  return (
    <Wrapper>
      <LeftContainer bgImage={'smiling-agent.jpg'} />
      <RightContainer>
        <h3>Hello</h3>
      </RightContainer>
    </Wrapper>
  );
};

export default UserPage;
