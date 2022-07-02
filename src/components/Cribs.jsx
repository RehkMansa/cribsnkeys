import styled from 'styled-components';
import CreateCrib from './CreateCrib';
import { RightContainer, Wrapper } from './HomePage';
import LeftContainer from './LeftContainer';
import RightFloatingMenu from './RightFloatingMenu';

const Cribs = () => {
  return (
    <Wrapper>
      <LeftContainer
        bgImage={'beachside-view.jpg'}
        position={'bottom right'}
        overlayValue={'rgba(0, 0, 0, 0.6)'}
        content={<CreateCrib />}
      />
      <RightContainer>
      </RightContainer>
    </Wrapper>
  );
};

export default Cribs;
