import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 40px;
  max-height: 600px;
  overflow: auto;
  text-transform: capitalize;
  width: 100%;
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
`;
const ListingDetails = styled.div`
  img {
    width: 100%;
    height: 250px;
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
    padding: 5px 10px;
    border-radius: 20px;
    width: auto;
    text-align: center;
    text-transform: capitalize;
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
`;
const SingleCrib = (props) => {
  const { title, imgURL, agent, location, price, desc, amenities } = props;
  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  return (
    <Wrapper {...props}>
      <Header>
        <div className="details">
          <h3>{title}</h3>
          <div className="details-inner">
            <div className="icon-holder">
              <FaMapMarkerAlt />
              <p>{location}</p>
            </div>
            <div className="icon-holder">
              <FaStar />
              <p>{randomInt(2, 5)}</p>
            </div>
          </div>
        </div>
        <button>₦{Number(price).toLocaleString()}</button>
      </Header>
      <ListingDetails>
        <img src={imgURL} alt="home" />
        <div className="content">
          <p>{desc}</p>
          {amenities.length >= 0 && amenities !== '' ? (
            <div className="grid-row">
              {amenities.map((amenity, n) => (
                <span key={n} className="labelAbsolute">
                  {amenity}
                </span>
              ))}
            </div>
          ) : (
            'No Amenities For this Property'
          )}
        </div>
      </ListingDetails>
      <AgentCard>
        <img src={agent.image} alt={agent.displayName} />
        <div className="details-inner column">
          <div className="icon-holder">
            <p className="username">{agent.displayName}</p>
            <MdVerified />
          </div>
          <p>{agent.uid}</p>
        </div>
      </AgentCard>
    </Wrapper>
  );
};

export default SingleCrib;
