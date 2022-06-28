import { useState } from 'react';
import styled from 'styled-components';
import InputElement from './InputElement';
import { toggleStateVar } from './utils/helpers';

const Wrapper = styled.div``;

const FormWrapper = styled.form`
  display: flex;
  width: 500px;
  flex-direction: column;
  gap: 20px;

  input {
    width: 100%;
  }
  .formInner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    span {
      cursor: pointer;
      color: var(--gold);
    }
  }
`;
const LoginForm = ({ loginState, setLoginState }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    //authenticate with google
  };

  return (
    <Wrapper>
      <h2>Please Login</h2>
      <FormWrapper onSubmit={handleSubmit}>
        <InputElement
          placeHolder={'Email Address'}
          type={'email'}
          value={email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
        <InputElement
          placeHolder={'Password'}
          type={'password'}
          value={password}
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
        />
        <button>Find A Crib</button>
        <div className="formInner">
          <p>Don't Have An Account ?</p>
          <span
            onClick={() => {
              toggleStateVar(loginState, setLoginState);
            }}
          >
            Register
          </span>
        </div>
      </FormWrapper>
    </Wrapper>
  );
};

export default LoginForm;
