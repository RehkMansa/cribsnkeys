import { RightContainer, Wrapper } from './HomePage';
import LeftContainer from './LeftContainer';

const CribDefault = () => {
  return (
    <Wrapper>
      <LeftContainer bgImage={''} content={<h1>Hello</h1>} />
      <RightContainer>
        <h3>My name is rehk</h3>
      </RightContainer>
    </Wrapper>
  );
};

export default CribDefault;
