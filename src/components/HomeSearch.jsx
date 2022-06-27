import { useState } from 'react';
import styled from 'styled-components';
import InputElement from './InputElement';

const Wrapper = styled.div`
  padding: 20px;

  h2{
    margin-bottom: 20px;
    font-size: 40px;
    text-align: center;
  }
`;

const FormWrapper = styled.form`
  display: flex;

  flex-direction: column;
  gap: 10px;

  input {
    width: 100%;
  }
`;

const HomeSearch = () => {
  const [location, setLocation] = useState('');
  const [numberOfDays, setNumberOfDays] = useState('');
  return (
    <Wrapper>
      <h2>Find Your Dream Crib</h2>
      <FormWrapper>
        <InputElement placeHolder={'Location'} />
        <InputElement placeHolder={'Number Of Days'} />
        <InputElement placeHolder={'Number Of Guests'} />
        <button>Find A Crib</button>
      </FormWrapper>
    </Wrapper>
  );
};

export default HomeSearch;
