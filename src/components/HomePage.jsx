import styled from 'styled-components';
import HomeSearch from './HomeSearch';
import LeftContainer from './LeftContainer';

export const Wrapper = styled.section`
  overflow: hidden;
  display: flex;
  & > div {
    width: 50%;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    & > div {
      width: 100%;
    }
  }

  .redefine-me {
    height: 100vh;
  }
`;
export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 5%;
  justify-content: center;
  position: relative;
  flex-direction: column;
  overflow: scroll;
  gap: 20px;
  height: 100vh;

  button {
    margin-top: 20px;
  }
  @media (max-width: 600px) {
    height: auto;
    padding: 50px 20px 70px;
  }

  h3 {
    font-size: 50px;
  }
`;

const Container = styled.div`
  width: 100vw !important;
`;
const HomePage = () => {
  return (
    <Wrapper>
      <Container>
        <LeftContainer
          className="redefine-me"
          overlayValue={'rgba(0, 0, 0, 0.45)'}
          bgImage={'bg-home.jpg'}
          content={<HomeSearch />}
          position="center top"
        />
      </Container>
    </Wrapper>
  );
};

export default HomePage;
