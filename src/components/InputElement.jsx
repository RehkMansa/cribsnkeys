import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    // width: 80%;
    font-weight: 400;
  }
`;

const InputElement = ({ placeHolder, onChange, value, type }) => {
  return (
    <InputWrapper>
      <input
        type={type}
        name={value}
        placeholder={placeHolder}
        onChange={onChange}
        value={value}
      />
    </InputWrapper>
  );
};

export default InputElement;
