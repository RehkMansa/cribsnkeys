import styled from 'styled-components';

const Container = styled.div`
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
    background-color: ${(props) => props.overlay};
  }
`;

const Content = styled.div`
  z-index: 1;
  width: 100%;
`;

const LeftContainer = ({ bgImage, content, overlayValue }) => {
  return (
    <Container bgImage={bgImage}>
      <div className="overlay" overlay={overlayValue}></div>
      <Content>{content}</Content>
    </Container>
  );
};

export default LeftContainer;
