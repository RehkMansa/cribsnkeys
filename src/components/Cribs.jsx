import { useNavigate } from 'react-router-dom';
import { RightContainer, Wrapper } from './HomePage';
import LeftContainer from './LeftContainer';
import CreateCrib from './CreateCrib';
import SingleCrib from './SingleCrib';
import { useEffect, useState } from 'react';
import { fetchAll } from './firebase/utils';
import LoadGif from './LoadGif';
import NavDots from './NavDots';
import { nextItem, prevItem } from './utils/helpers';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const fadeAnimation = keyframes`${fadeIn}`;

const CribWrapper = styled.div`
  width: 100%;
  animation: 3s ${fadeAnimation};
`;

const Cribs = ({ userData }) => {
  const [cribsArray, setCribsArray] = useState([]);
  const [divKey, setDivKey] = useState(0);
  const [currentCrib, setCurrentCrib] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [countVar, setCountVar] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    setShowLoader(true);
    fetchAll('cribs').then((res) => {
      setCribsArray(res);
      setCurrentCrib([res[0]]);
      setShowLoader(false);
    });
  }, []);

  return (
    <>
      {cribsArray.length >= 1 ? (
        <Wrapper>
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
              <CribWrapper key={divKey}>
                {currentCrib.map((cribs, n) => (
                  <SingleCrib
                    key={n}
                    title={cribs.title}
                    imgURL={cribs.image}
                    agent={cribs.agent}
                    location={cribs.location}
                    price={cribs.price}
                    desc={cribs.desc}
                    amenities={cribs.amenities}
                    func={() => {
                      navigate(cribs.snapID, { state: cribs });
                    }}
                  />
                ))}
              </CribWrapper>
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
              }}
            />
          </RightContainer>
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
