import AgentSingle from './AgentSingle';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LeftContainer from './LeftContainer';
import { RightContainer, Wrapper } from './HomePage';
import styled from 'styled-components';
import { queryDB } from './firebase/utils';
import SingleCrib from './SingleCrib';
import LoadGif from './LoadGif';

const ContentWrap = styled.div`
  background-color: rgba(7, 12, 31, 0.9);
  width: 100%;
  border-radius: 20px;
`;

const AgentCard = () => {
  const { state } = useLocation();
  const [agent] = useState(state);
  const [showLoader, setShowLoader] = useState(true);
  const [cribsArr, setCribsArr] = useState([]);

  useEffect(() => {
    queryDB('cribs', 'agent.uid', state.snapID).then((data) => {
      setCribsArr(data);
      console.log(cribsArr);

      console.log(cribsArr);
      setShowLoader(false);
    });
  }, []);

  return (
    <Wrapper>
      {showLoader === true ? (
        <LoadGif width={'100vw'} height={'100vh'} />
      ) : (
        <>
          <LeftContainer
            bgImage={'man-on-glass.jpg'}
            position={'center'}
            overlayValue={'rgba(0, 0, 0, 0.4)'}
            content={
              <ContentWrap>
                <AgentSingle
                  contact={agent.contact}
                  location={agent.location}
                  name={agent.name}
                  user={agent.user}
                />
              </ContentWrap>
            }
          />
          <RightContainer>
            {cribsArr.length >= 1 ? (
              cribsArr.map((crib) => (
                <SingleCrib
                  key={crib.docID}
                  title={crib.title}
                  imgURL={crib.image}
                  agent={crib.agent}
                  location={crib.location}
                  price={crib.price}
                  desc={crib.desc}
                  amenities={crib.amenities}
                />
              ))
            ) : (
              <LoadGif />
            )}
          </RightContainer>
        </>
      )}
    </Wrapper>
  );
};

export default AgentCard;
