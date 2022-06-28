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
const SignUpForm = ({ loginState, setLoginState }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    //authenticate with google
  };
  return (
    <Wrapper>
      <h2>Create an account</h2>
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
          placeHolder={'Enter Password'}
          type={'password'}
          value={password}
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
        />
        <InputElement
          placeHolder={'Confirm Password'}
          type={'password'}
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.currentTarget.value);
          }}
        />
        <button>Find A Crib</button>
        <div className="formInner">
          <p>Do you have an account ?</p>
          <span
            onClick={() => {
              toggleStateVar(loginState, setLoginState);
            }}
          >
            Sign In
          </span>
        </div>
      </FormWrapper>
    </Wrapper>
  );
};

export default SignUpForm;
