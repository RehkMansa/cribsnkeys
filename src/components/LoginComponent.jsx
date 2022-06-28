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

  .closeForm {
    position: absolute;
    top: 15%;
    right: 25%;
    cursor: pointer;
    font-size: 20px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: var(--gold);
    padding: 5px;
    border: 1px solid var(--gold);
  }
`;

const LoginComponent = ({ setShowLoginState }) => {
  const [logIn, setLogIn] = useState(true);
  return (
    <Wrapper>
      {logIn === true ? (
        <LoginForm loginState={logIn} setLoginState={setLogIn} />
      ) : (
        <SignUpForm loginState={logIn} setLoginState={setLogIn} />
      )}

      <div
        className="closeForm"
        onClick={() => {
          setShowLoginState(false);
        }}
      >
        X
      </div>
    </Wrapper>
  );
};

export default LoginComponent;
