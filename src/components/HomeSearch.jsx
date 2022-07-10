import { useState } from 'react';
import {
  createSearchParams,
  useNavigate,
} from 'react-router-dom';
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
  const [location, setLocation] = useState('');
  const [days, setDays] = useState('');
  const [guests, setGuests] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = {
      location,
      days,
      guests,
    };
    navigate({ pathname: '/search', search: `?${createSearchParams(query)}` });
  };
  return (
    <Wrapper>
      <h2>Find Your Dream Crib</h2>
      <FormWrapper onSubmit={handleSubmit}>
        <InputElement
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          required
          value={location}
          placeHolder={'Location'}
        />
        <InputElement
          onChange={(e) => {
            setDays(e.target.value);
          }}
          value={days}
          placeHolder={'Number Of Days'}
        />
        <InputElement
          onChange={(e) => {
            setGuests(e.target.value);
          }}
          value={guests}
          placeHolder={'Number Of Guests'}
        />
        <button>Find A Crib</button>
      </FormWrapper>
    </Wrapper>
  );
};

export default HomeSearch;
