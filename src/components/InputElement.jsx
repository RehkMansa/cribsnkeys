import styled from 'styled-components';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    // width: 80%;
    font-weight: 400;
  }
`;

const PasswordWrap = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;

  .password-toggle {
    position: absolute;
    color: var(--blue);
    font-size: 25px;
    top: 8px;
    right: 10px;
  }
`;

const InputElement = ({ placeHolder, onChange, value, type, required }) => {
  const [passwordValue, setPasswordValue] = useState('password');

  return (
    <InputWrapper>
      {type == 'password' ? (
        <PasswordWrap>
          <input
            type={passwordValue}
            name={value}
            placeholder={placeHolder}
            onChange={onChange}
            value={value}
            required={required}
          />
          <div
            onClick={() => {
              passwordValue == 'password'
                ? setPasswordValue('text')
                : setPasswordValue('password');
            }}
            className="password-toggle"
          >
            {passwordValue == 'password' ? <FaEye /> : <FaEyeSlash />}
          </div>
        </PasswordWrap>
      ) : (
        <input
          type={type}
          name={value}
          placeholder={placeHolder}
          onChange={onChange}
          value={value}
          required={required}
        />
      )}
    </InputWrapper>
  );
};

export default InputElement;
