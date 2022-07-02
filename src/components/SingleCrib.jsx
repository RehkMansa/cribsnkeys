import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import styled from 'styled-components';

const Wrapper = styled.div``;
const AgentCard = styled.div``;
const ListingDetails = styled.div``;
const Header = styled.div``;
const SingleCrib = (props) => {
  // const { title, imgURL, agent, location } = props;
  return (
    <Wrapper>
      <Header>
        <div className="details">
          <div className="header">
            <h3>Houston Villa, 3 Bedroom Flat</h3>
            <button>price</button>
          </div>
          <div className="details-inner">
            <div className="icon-holder">
              <FaMapMarkerAlt />
              <p>Gbagada, Lagos</p>
            </div>
            <div className="icon-holder">
              <FaStar />
              <p>Reviews</p>
            </div>
          </div>
        </div>
      </Header>
      <ListingDetails>
        <img src="/images/singe-home.webp" alt="home" />
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            nulla!
          </p>
        </div>
      </ListingDetails>
      <AgentCard>
        <img src="/images/default-user.jpg" alt="user" />
        <div className="icon-holder">
          <p>displayName</p>
          <MdVerified />
        </div>
      </AgentCard>
    </Wrapper>
  );
};

export default SingleCrib;
