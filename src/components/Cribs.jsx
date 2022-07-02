import styled from 'styled-components';
import { RightContainer, Wrapper } from './HomePage';
import LeftContainer from './LeftContainer';
import RightFloatingMenu from './RightFloatingMenu';

const Cribs = () => {
  return (
    <Wrapper>
      <LeftContainer
        bgImage={'beachside-view.png'}
        position={'bottom right'}
        overlayValue={'rgba(0, 0, 0, 0.3)'}
      />
      <RightContainer>
        <RightFloatingMenu />
      </RightContainer>
    </Wrapper>
  );
};

export default Cribs;
