import { FaMapMarkerAlt, FaMoneyBillAlt, FaStar } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 40px;
  text-transform: capitalize;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  svg {
    color: var(--gold);
  }
  .icon-holder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  .details-inner {
    display: flex;
    align-items: start;
    gap: 20px;
  }
  .column {
    flex-direction: column;
    gap: 7px;
  }

  .username {
    text-transform: none;
  }

  @media (max-width: 965px) {
    .uDiv {
      flex-wrap: wrap;
    }
  }
`;
const AgentCard = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
  @media (max-width: 965px) {
    flex-wrap: wrap;
  }
`;

const AgentInner = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
  align-items: center;
  .grid-row {
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
  }

  .labelAbsolute {
    font-family: karla;
    font-weight: 500;
    font-size: 15px;
    color: rgba(70, 70, 70, 0.89);
    background-color: #e7e7e7;
    padding: 7px 10px;
    border-radius: 20px;
    width: auto;
    text-align: center;
    text-transform: capitalize;
  }
`;

const ListingDetails = styled.div`
  img {
    width: 100%;
    height: 220px;
    border-radius: 10px;
    object-fit: cover;
  }
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: start;

  .content {
    line-height: 20px;
    align-items: start;
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
      text-transform: none;
    }
  }
`;
const Header = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: start;
  h3 {
    font-size: 25px;
  }
  .details {
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 20px;
  }

  button {
    border-radius: 20px;
  }

  @media (max-width: 965px) {
    flex-wrap: wrap;
    gap: 20px;

    button {
      width: 100%;
    }
  }
`;
const SingleCrib = (props) => {
  const {
    title,
    imgURL,
    agent,
    location,
    price,
    desc,
    amenities,
    height,
    func,
  } = props;
  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  return (
    <Wrapper itemHeight={height}>
      <Header>
        <div className="details">
          <h3 style={{ fontSize: 25 }}>{title}</h3>
          <div className="details-inner">
            <div className="icon-holder">
              <FaMapMarkerAlt />
              <p>{location}</p>
            </div>
            <div className="icon-holder">
              <FaStar />
              <p>{randomInt(3, 5)}</p>
            </div>
            <div className="icon-holder">
              <FaMoneyBillAlt />
              <p>₦{Number(price).toLocaleString()}</p>
            </div>
          </div>
        </div>
        {func && <button onClick={func}>View Crib</button>}
      </Header>
      <ListingDetails>
        <img src={imgURL} alt={title} />
        <div className="content">
          <p>{desc}</p>
        </div>
      </ListingDetails>
      <AgentInner className="row uDiv">
        {amenities.length >= 0 && amenities !== '' ? (
          <div className="grid-row">
            {amenities.map((amenity, n) => (
              <span key={n} className="labelAbsolute">
                {amenity}
              </span>
            ))}
          </div>
        ) : (
          <span className="labelAbsolute">No Amenities For this Property</span>
        )}

        <AgentCard>
          <img src={agent.image} alt={agent.displayName} />
          <div className="details-inner column">
            <div className="icon-holder uDiv">
              <p className="username">{agent.displayName}</p>
              <MdVerified />
            </div>
            <p>{agent.uid}</p>
          </div>
        </AgentCard>
      </AgentInner>
    </Wrapper>
  );
};

export default SingleCrib;
