import styled from 'styled-components';
import Cribs from './Cribs';
import HomeSearch from './HomeSearch';

const Wrapper = styled.section`
  display: flex;
  & > div {
    width: 50%;
  }
`;
const LeftContainer = styled.div`
  background: url(/images/${(props) => props.bgImage}), rgba(7, 12, 31, 0.3);
  padding: 20px 5%;
  background-position: center;
  background-size: cover;
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
  }
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 5%;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  h3{
    font-size: 50px;
  }
`;

const Content = styled.div`
  z-index: 1;
  width: 100%;
`;

const HomePage = () => {
  return (
    <Wrapper>
      <LeftContainer bgImage={'home-bg-left.jpg'}>
        <div className="overlay"></div>
        <Content>
          <HomeSearch />
        </Content>
      </LeftContainer>
      <RightContainer>
        <h3>Browse Featured Cribs</h3>
        <Cribs />
      </RightContainer>
    </Wrapper>
  );
};

export default HomePage;
