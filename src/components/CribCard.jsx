import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ContentWrap } from './AgentCard';
import AgentSingle from './AgentSingle';
import { fetchSingle } from './firebase/utils';
import { RightContainer, Wrapper } from './HomePage';
import LeftContainer from './LeftContainer';
import LoadGif from './LoadGif';
import SingleCrib from './SingleCrib';

const CribCard = () => {
  const { state } = useLocation();
  const [crib] = useState(state);
  const [showLoader, setShowLoader] = useState(true);
  const [agent, setAgent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getData = () => {
      if (state === null) {
        navigate('/cribs');
      } else {
        console.log(state.agent.uid);
        fetchSingle('agents', state.agent.uid).then((res) => {
          setAgent(res);

          setShowLoader(false);
        });
      }
    };

    getData();
  }, [navigate, state]);

  return (
    <Wrapper>
      {showLoader ? (
        <LoadGif height={'100vh'} width={'100vw'} />
      ) : (
        <>
          <LeftContainer
            bgImage={'resort-1.jpg'}
            position="bottom center"
            overlayValue="rgba(0,0,0,0.4)"
            content={
              <ContentWrap style={{ padding: 10 }}>
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
            <SingleCrib
              title={crib.title}
              imgURL={crib.image}
              agent={crib.agent}
              location={crib.location}
              price={crib.price}
              desc={crib.desc}
              amenities={crib.amenities}
            />
          </RightContainer>
        </>
      )}
    </Wrapper>
  );
};

export default CribCard;
