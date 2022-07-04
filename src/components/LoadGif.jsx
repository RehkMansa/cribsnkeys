import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${(props) => props.bgWidth};
  height: ${(props) => props.bgHeight};
`;

const LoadGif = ({ width, height }) => {
  return (
    <Wrapper bgWidth={width} bgHeight={height}>
      <img src="/images/285.gif" alt="loader" />
    </Wrapper>
  );
};

export default LoadGif;
