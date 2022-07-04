import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InputElement from './InputElement';

const Wrapper = styled.div`
  padding: 20px;

  h2 {
    margin-bottom: 20px;
    font-size: 40px;
    text-align: center;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  gap: 20px;
  flex-direction: column;

  input {
    width: 100%;
  }
  input,
  button {
    border-radius: 10px;
    color: #000;
  }
`;

const HomeSearch = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/cribs');
  };
  return (
    <Wrapper>
      <h2>Find Your Dream Crib</h2>
      <FormWrapper onSubmit={handleSubmit}>
        <InputElement placeHolder={'Location'} />
        <InputElement placeHolder={'Number Of Days'} />
        <InputElement placeHolder={'Number Of Guests'} />
        <button>Find A Crib</button>
      </FormWrapper>
    </Wrapper>
  );
};

export default HomeSearch;
