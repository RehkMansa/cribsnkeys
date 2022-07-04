import styled from 'styled-components';

const Wrapper = styled.div``;

const Header = styled.div``;

const Details = styled.div``;

const DetailsInner = styled.div``;

const AgentSingle = (props) => {
  const { contact, location, name, user } = props;
  return (
    <Wrapper>
      <Header>
        <h2>
          {name.firstName} {name.lastName}
        </h2>
        <img src={user.img} alt="" />
      </Header>
    </Wrapper>
  );
};

export default AgentSingle;
