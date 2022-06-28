import { useState } from 'react';
import styled from 'styled-components';
import InputElement from './InputElement';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
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

const LoginComponent = () => {
  const [logIn, setLogIn] = useState(true);
  return (
    <Wrapper>
      {logIn === true ? (
        <LoginForm loginState={logIn} setLoginState={setLogIn} />
      ) : (
        <SignUpForm loginState={logIn} setLoginState={setLogIn} />
      )}
    </Wrapper>
  );
};

export default LoginComponent;
