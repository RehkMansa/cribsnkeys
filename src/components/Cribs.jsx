import { Route, Routes } from 'react-router-dom';
import { RightContainer, Wrapper } from './HomePage';
import LeftContainer from './LeftContainer';
import CreateCrib from './CreateCrib';
import SingleCrib from './SingleCrib';
import { useEffect, useState } from 'react';
import { fetchAll } from './firebase/utils';

const Cribs = ({ userData }) => {
  const [cribsArray, setCribsArray] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    setShowLoader(true);
    fetchAll('cribs').then((res) => {
      setCribsArray(res);
      setShowLoader(false);

      console.log(res);
    });
  }, []);

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
                {showLoader && cribsArray.length <= 0 ? (
                  <h3>Loading ...</h3>
                ) : (
                  cribsArray.map((cribs, n) => (
                    <SingleCrib
                      key={n}
                      title={cribs.title}
                      imgURL={cribs.image}
                      agent={cribs.agent}
                      location={cribs.location}
                      price={cribs.price}
                      desc={cribs.desc}
                      amenities={cribs.amenities}
                    />
                  ))
                )}
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
