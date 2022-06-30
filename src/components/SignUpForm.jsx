import { useState } from 'react';
import styled from 'styled-components';
import { emailSignUp } from './firebase/utils';
import InputElement from './InputElement';
import { toggleStateVar } from './utils/helpers';

const Wrapper = styled.div`
  h2 {
    margin-bottom: 40px;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  width: 500px;
  flex-direction: column;
  gap: 20px;

  .alert {
    background-color: #fff;
    padding: 20px;
    color: rgb(50, 50, 50);
  }

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
const SignUpForm = ({ loginState, setLoginState, showLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signUpErrors, setSignUpErrors] = useState('');
  const [showErrors, setShowErrors] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setShowErrors(true);
      setSignUpErrors({ message: 'Password Does not match' });

      return;
    }

    const signUp = await emailSignUp(email, password);

    console.log(signUp);

    if (signUp.data != null) {
      showLogin(false);
    } else if (signUp.errors != null) {
      setShowErrors(true);
      setSignUpErrors(signUp.errors);
    }
  };
  return (
    <Wrapper>
      <h2>Create an account</h2>
      <FormWrapper onSubmit={handleSubmit}>
        {showErrors && <div className="alert">{signUpErrors.message}</div>}
        <InputElement
          placeHolder={'Email Address'}
          type={'email'}
          value={email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
          required
        />
        <InputElement
          placeHolder={'Enter Password'}
          type={'password'}
          value={password}
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
          required
        />
        <InputElement
          placeHolder={'Confirm Password'}
          type={'password'}
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.currentTarget.value);
          }}
          required
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
