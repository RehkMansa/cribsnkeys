import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  & > div {
    width: 50%;
  }
`;
const LeftContainer = styled.div`
  background: url(/images/${(props) => props.bgImage}), rgba(0, 0, 0, 0.3);
  background-position: center;
  background-size: cover;
  position: relative;
  min-height: 100vh;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
const RightContainer = styled.div``;
const HomePage = () => {
  return (
    <Wrapper>
      <LeftContainer bgImage={'home-bg-left.jpg'}>
        <div className="overlay"></div>
      </LeftContainer>
      <RightContainer></RightContainer>
    </Wrapper>
  );
};

export default HomePage;
