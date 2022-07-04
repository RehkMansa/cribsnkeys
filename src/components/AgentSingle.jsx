import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import { randomInt } from './utils/helpers';

const Wrapper = styled.div`
  width: ${(props) => (props.bgWidth ? props.bgWidth : '100%')};
  padding-bottom: 20px;
  text-transform: capitalize;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  max-height: 600px;
  // outline: 1px solid red;
  overflow: auto;

  .email {
    text-transform: none;
  }

  .rating {
    color: #f2b636;
    justify-content: start;
    gap: 10px;
    align-items: center;
    h5 {
      font-size: 16px;
      font-family: karla;
    }
  }
`;

const Header = styled.div`
  align-items: center;
  margin-top: 50px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
  h2 {
    margin: 10px 0;
    color: #f2b636;
    font-size: 75px;
    font-weight: 700;
    line-height: 1;
  }
`;

const Details = styled.div``;

const DetailsInner = styled.div`
  font-weight: 400;
  margin: 20px 0;
  color: #878c9b;
  font-size: 18px;
  display: flex;
  gap: 10px;
  flex-flow: column;

  h5 {
    color: #f2b636;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 18px;
    font-family: 'Karla', sans-serif;
    margin: 10px 0;
  }
`;
const IconWrapper = styled.div`
  display: flex;
  font-size: 15px;
  gap: 5px;
`;
const AgentSingle = ({ contact, location, name, user, width }) => {
  const [starRatings, setStarRatings] = useState([]);
  useEffect(() => {
    generateStars(randomInt(2, 5));
  }, []);

  const generateStars = (num) => {
    let newArr = [];
    for (let i = 0; i <= num; i++) {
      newArr.push(i);
    }
    setStarRatings(newArr);
  };
  return (
    <Wrapper className="flex20 center column" bgWidth={width}>
      <Header className="flex20">
        <img src={user.image} alt={user.middleName} />
        <h2>
          {name.firstName} {name.surname}
        </h2>
      </Header>
      <Details>
        <DetailsInner>
          <h5>Location Details</h5>
          <p>Address: {location.address}</p>
          <p>City: {location.city}</p>
          <p>State: {location.state}</p>
          <p>Street: {location.street}</p>
        </DetailsInner>
        <DetailsInner>
          <h5>Contact Details</h5>
          <p className="email">Email: {contact.email}</p>
          <p>Phone Number: {contact.number}</p>
          <p>Middle Name: {name.middleName}</p>
          <p>Agent UID: {user.uid}</p>
        </DetailsInner>
        <div className="rating flex20">
          <h5>Agent Rating :</h5>
          <IconWrapper>
            {starRatings.length >= 1
              ? starRatings.map((stars) => <FaStar key={stars} />)
              : 'Agent Not Yet Rated'}
          </IconWrapper>
        </div>
      </Details>
    </Wrapper>
  );
};

export default AgentSingle;
