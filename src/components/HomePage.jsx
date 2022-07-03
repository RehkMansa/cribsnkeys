import { useState } from 'react';
import styled from 'styled-components';
import Cribs from './Cribs';
import HomeSearch from './HomeSearch';
import LeftContainer from './LeftContainer';
import LoginComponent from './LoginComponent';
import RightFloatingMenu from './RightFloatingMenu';

export const Wrapper = styled.section`
  overflow: hidden;
  display: flex;
  & > div {
    width: 50%;
  }
`;
export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 5%;
  justify-content: center;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  gap: 20px;
  // background-color: #121212;
  /* background-image: url(https://kruisekontrol.net/wp-content/uploads/2022/07/waves-min.png);
  background-repeat: no-repeat;
  background-position: center left;
  background-size: cover; */

  h3 {
    font-size: 50px;
  }
`;

const HomePage = ({ userData, showLogin, setShowLogin }) => {
  return (
    <Wrapper>
      <LeftContainer
        overlayValue={'rgba(0, 0, 0, 0.45)'}
        bgImage={'home-bg-left.jpg'}
        content={<HomeSearch />}
      />
      <RightContainer>
        <h3>Browse Featured Cribs</h3>
        <p>Show Cribs</p>
      </RightContainer>
      {showLogin && <LoginComponent setShowLoginState={setShowLogin} />}
    </Wrapper>
  );
};

export default HomePage;
