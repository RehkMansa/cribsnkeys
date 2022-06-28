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
  return (
    <Wrapper>
      <h2>Please Login</h2>
      <FormWrapper>
        <InputElement placeHolder={'Username'} />
        <InputElement placeHolder={'Password'} />
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
