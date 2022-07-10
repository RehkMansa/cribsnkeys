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
    // gap: 50px;
    & > div {
      width: 100%;
    }
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

  h3 {
    font-size: 50px;
  }

  @media (max-width: 600px) {
    order: ;
  }
`;

const Container = styled.div`
  min-width: 100vw !important;
`;

const HomePage = (props) => {
  return (
    <Wrapper>
      <Container>
        <LeftContainer
          overlayValue={'rgba(0, 0, 0, 0.45)'}
          bgImage={'bg-home.jpg'}
          content={<HomeSearch />}
          position="center top"
        />
      </Container>
      <RightContainer>
        <h3>My Head oo</h3>
      </RightContainer>
    </Wrapper>
  );
};

export default HomePage;
