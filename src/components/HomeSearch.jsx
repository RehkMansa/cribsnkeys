import { useState } from 'react';
import styled from 'styled-components';
import InputElement from './InputElement';

const Wrapper = styled.div``;

const FormWrapper = styled.form`
  display: flex;

  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const HomeSearch = () => {
  const [location, setLocation] = useState('');
  const [numberOfDays, setNumberOfDays] = useState('');
  return (
    <Wrapper>
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
