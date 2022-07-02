// import styled from 'styled-components';
import CreateCrib from './CreateCrib';
import { RightContainer, Wrapper } from './HomePage';
import LeftContainer from './LeftContainer';

const Cribs = ({ userData }) => {
  return (
    <Wrapper>
      <LeftContainer
        bgImage={'beachside-view.jpg'}
        position={'bottom right'}
        overlayValue={'rgba(0, 0, 0, 0.6)'}
        content={<CreateCrib user={userData} />}
      />
      <RightContainer>
        <h3>Show Listings</h3>
      </RightContainer>
    </Wrapper>
  );
};

export default Cribs;
