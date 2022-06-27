import { useState } from 'react';
import styled from 'styled-components';
import InputElement from './InputElement';
import { toggleStateVar } from './utils/helpers';

const Wrapper = styled.div`
  padding: 20px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
  width: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h2 {
    margin-bottom: 20px;
    font-size: 40px;
    text-align: center;
  }
`;

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

const LoginForm = () => {
  const [logIn, setLogIn] = useState(true);
  return (
    <Wrapper>
      {logIn === true ? (
        <>
          <h2>Please Login</h2>
          <FormWrapper>
            <InputElement placeHolder={'Username'} />
            <InputElement placeHolder={'Password'} />
            <button>Find A Crib</button>
            <div className="formInner">
              <p>Don't Have An Account ?</p>
              <span
                onClick={() => {
                  toggleStateVar(logIn, setLogIn);
                }}
              >
                Register
              </span>
            </div>
          </FormWrapper>
        </>
      ) : (
        <>
          <h2>Create a new account</h2>
          <FormWrapper>
            <InputElement placeHolder={'Username'} />
            <InputElement placeHolder={'Password'} />
            <button>Find A Crib</button>
            <div className="formInner">
              <p>Do you have an account ?</p>
              <span
                onClick={() => {
                  toggleStateVar(logIn, setLogIn);
                }}
              >
                Sign In
              </span>
            </div>
          </FormWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default LoginForm;
