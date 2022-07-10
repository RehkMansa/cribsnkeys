import styled from 'styled-components';

const Container = styled.div`
  background: url(/images/${(props) => props.bgImage}), rgba(7, 12, 31, 0.3);
  padding: 20px 5%;
  background-position: ${(props) =>
    props.imgPosition ? props.imgPosition : 'center'};
  background-size: cover;
  position: relative;
  max-height: 100vh;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.overlay};
  }

  @media (max-width: 600px) {
    height: auto;
    min-height: fit-content;
    max-height: fit-content;
  }
`;

const Content = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  margin-top: 50px;

  h3 {
    font-size: 40px;
    line-height: 50px;
  }
`;

const LeftContainer = ({ bgImage, content, overlayValue, position }) => {
  return (
    <Container imgPosition={position} bgImage={bgImage} overlay={overlayValue}>
      <Content>{content}</Content>
      <div className="overlay"></div>
    </Container>
  );
};

export default LeftContainer;
