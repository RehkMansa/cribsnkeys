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
  return (
    <Wrapper>
      <h2>Create an account</h2>
      <FormWrapper>
        <InputElement placeHolder={'Username'} />
        <InputElement placeHolder={'Password'} />
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
