import { useState } from 'react';
import styled from 'styled-components';
import { emailSignUp } from './firebase/utils';
import InputElement from './InputElement';
import { toggleStateVar } from './utils/helpers';
import LoadGif from './LoadGif';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const FormWrapper = styled.form`
  display: flex;
  width: 500px;
  flex-direction: column;
  gap: 20px;

  .alert {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 20px;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
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
  const [showLoader, setShowLoader] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setShowErrors(true);
      setSignUpErrors({ message: 'Password Does not match' });
      return;
    }
    setShowLoader(true);

    const signUp = await emailSignUp(email, password);

    console.log(signUp);

    if (signUp.data != null) {
      showLogin(false);
      navigate('/user');
    } else if (signUp.errors != null) {
      setShowErrors(true);
      setSignUpErrors(signUp.errors);
      setShowLoader(false);
    }
  };
  return (
    <Wrapper>
      <h2>Create an account</h2>
      {showLoader ? (
        <LoadGif />
      ) : (
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
          <button>Sign Up</button>
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
      )}
    </Wrapper>
  );
};

export default SignUpForm;
