import AgentSingle from './AgentSingle';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LeftContainer from './LeftContainer';
import { Wrapper } from './HomePage';
import styled from 'styled-components';
import { queryDB } from './firebase/utils';
import SingleCrib from './SingleCrib';
import LoadGif from './LoadGif';

export const ContentWrap = styled.div`
  background-color: rgba(7, 12, 31, 0.9);
  width: 100%;
  border-radius: 20px;
`;

const RightCard = styled.div`
  display: flex;
  padding: 80px 5%;
  position: relative;
  // align-items: center;
  // justify-content: center;
  flex-direction: column;
  overflow: scroll;
  gap: 20px;
  height: 100vh;
`;

const LoaderWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 100%;
  gap: 20px;
  justify-content: center;
  flex-direction: column;

  h4 {
    font-size: 30px;
  }

  button {
    background: transparent;
    border: 2px solid var(--gold);
    border-radius: 30px;
    color: var(--gold);
    padding-left: 40px;
    padding-right: 40px;
    margin-top: 30px;
  }
`;

const AgentCard = () => {
  const { state } = useLocation();
  const [agent] = useState(state);
  const [showLoader, setShowLoader] = useState(true);
  const [cribsArr, setCribsArr] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      if (state === null) {
        navigate('/agents');
      } else {
        queryDB('cribs', 'agent.uid', state.snapID).then((data) => {
          setCribsArr(data);
          setShowLoader(false);

          console.log('Fetched Data');
        });
      }
    };

    getData();
  }, [state, navigate]);

  return (
    <Wrapper>
      {showLoader === true ? (
        <LoadGif width={'100vw'} height={'100vh'} />
      ) : (
        <>
          <LeftContainer
            bgImage={'man-on-glass2.jpg'}
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
          <RightCard>
            {cribsArr.length >= 1 ? (
              <>
                {' '}
                {cribsArr.map((crib) => (
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
                ))}
                <button
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  Go Back
                </button>{' '}
              </>
            ) : (
              <LoaderWrapper>
                <h4>Agent Does Not have any crib</h4>

                <button
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  Go Back
                </button>
              </LoaderWrapper>
            )}
          </RightCard>
        </>
      )}
    </Wrapper>
  );
};

export default AgentCard;
