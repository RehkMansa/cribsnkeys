import styled from 'styled-components';

const Wrapper = styled.div``;

const Alert = ({ message, position }) => {
  return (
    <Wrapper>
      <div className="alert">
        <p>Complete user sign up</p>
      </div>
    </Wrapper>
  );
};

export default Alert;
