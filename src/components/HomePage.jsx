import { useState } from 'react';
import styled from 'styled-components';
import Cribs from './Cribs';
import HomeSearch from './HomeSearch';
import LeftContainer from './LeftContainer';
import LoginComponent from './LoginComponent';
import RightFloatingMenu from './RightFloatingMenu';

const Wrapper = styled.section`
  display: flex;
  & > div {
    width: 50%;
  }
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 5%;
  justify-content: center;
  position: relative;
  flex-direction: column;
  gap: 20px;

  h3 {
    font-size: 50px;
  }
`;

const HomePage = ({ userData }) => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Wrapper>
      <LeftContainer bgImage={'home-bg-left.jpg'} content={<HomeSearch />} />
      <RightContainer>
        <RightFloatingMenu
          loginState={showLogin}
          user={userData}
          setLogin={setShowLogin}
        />
        <h3>Browse Featured Cribs</h3>
        <Cribs />
      </RightContainer>
      {showLogin && <LoginComponent setShowLoginState={setShowLogin} />}
    </Wrapper>
  );
};

export default HomePage;
