import { Route, Routes } from 'react-router-dom';
import { RightContainer, Wrapper } from './HomePage';
import LeftContainer from './LeftContainer';
import CreateCrib from './CreateCrib';
// import CribDefault from './CribDefault';
import SingleCrib from './SingleCrib';

const Cribs = ({ userData }) => {
  return (
    <Wrapper>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LeftContainer
                bgImage={'beachside-view.jpg'}
                position={'bottom right'}
                overlayValue={'rgba(0, 0, 0, 0.6)'}
                content={<CreateCrib user={userData} />}
              />
              <RightContainer>
                <h3>Show Listings</h3>
              </RightContainer>
            </>
          }
        />
        <Route
          path="/:id"
          element={
            <>
              <LeftContainer
                bgImage={'beachside-view.jpg'}
                position={'bottom right'}
                overlayValue={'rgba(0, 0, 0, 0.6)'}
                content={<CreateCrib user={userData} />}
              />
              <RightContainer>
                <SingleCrib />
              </RightContainer>
            </>
          }
        />
      </Routes>
    </Wrapper>
  );
};

export default Cribs;
