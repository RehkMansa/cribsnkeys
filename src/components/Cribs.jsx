import { Route, Routes } from 'react-router-dom';
import { RightContainer, Wrapper } from './HomePage';
import LeftContainer from './LeftContainer';
import CreateCrib from './CreateCrib';
import SingleCrib from './SingleCrib';
import { useEffect, useState } from 'react';
import { fetchAll } from './firebase/utils';
import LoadGif from './LoadGif';
import NavDots from './NavDots';
import { nextItem, prevItem } from './utils/helpers';

const Cribs = ({ userData }) => {
  const [cribsArray, setCribsArray] = useState([]);
  const [divKey, setDivKey] = useState(0);
  const [currentCrib, setCurrentCrib] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [countVar, setCountVar] = useState(0);
  useEffect(() => {
    setShowLoader(true);
    fetchAll('cribs').then((res) => {
      setCribsArray(res);
      setCurrentCrib([res[0]]);
      setShowLoader(false);
      console.log(res);
    });
  }, []);

  return (
    <>
      {cribsArray.length >= 1 ? (
        <Wrapper>
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
                  {showLoader && currentCrib.length >= 0 ? (
                    <LoadGif />
                  ) : (
                    currentCrib.map((cribs, n) => (
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
                  <NavDots
                    onClickLeft={() => {
                      prevItem(
                        countVar,
                        setCountVar,
                        divKey,
                        setDivKey,
                        setCurrentCrib,
                        cribsArray
                      );

                      console.log('prev item clicked', countVar);
                    }}
                    onClickRight={() => {
                      nextItem(
                        countVar,
                        setCountVar,
                        divKey,
                        setDivKey,
                        setCurrentCrib,
                        cribsArray
                      );

                      console.log('next item clicked', countVar);
                    }}
                  />
                </RightContainer>
              </>
            }
          />
        </Wrapper>
      ) : (
        <div
          className="flex20 center"
          style={{ width: '100vw', height: '100vh' }}
        >
          <LoadGif />
        </div>
      )}
    </>
  );
};

export default Cribs;
