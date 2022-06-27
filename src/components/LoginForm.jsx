import { useState } from 'react';
import styled from 'styled-components';
import InputElement from './InputElement';

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
`;

const LoginForm = () => {
  return (
    <Wrapper>
      <h2>Login To Your Account</h2>
      <FormWrapper>
        <InputElement placeHolder={'Username'} />
        <InputElement placeHolder={'Password'} />
        <button>Find A Crib</button>
      </FormWrapper>
    </Wrapper>
  );
};

export default LoginForm;
