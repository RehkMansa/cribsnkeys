import { useEffect, useState } from 'react';
import AgentSingle from './AgentSingle';
import { fetchAll } from './firebase/utils';
import { RightContainer, Wrapper } from './HomePage';
import LeftContainer from './LeftContainer';
import LoadGif from './LoadGif';
import UserForm from './UserForm';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import NavDots from './NavDots';
import { nextItem, prevItem } from './utils/helpers';
import { useNavigate } from 'react-router-dom';

const fadeAnimation = keyframes`${fadeIn}`;

const AgentWrapper = styled.div`
  width: 100%;
  animation: 3s ${fadeAnimation};
`;

const AgentsPage = ({ userData }) => {
  const [showLoader, setShowLoader] = useState(false);
  const [agentsArr, setAgentsArr] = useState([]);
  const [divKey, setDivKey] = useState(0);
  const [currentAgentArr, setCurrentAgentArr] = useState([]);
  const [countVar, setCountVar] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    setShowLoader(true);

    fetchAll('agents').then((res) => {
      setAgentsArr(res);

      setCurrentAgentArr([res[0]]);
      setShowLoader(false);

      console.log(res);
    });
  }, []);

  return (
    <>
      {agentsArr.length >= 1 ? (
        <Wrapper>
          <LeftContainer
            content={<UserForm user={userData} />}
            bgImage="agent-page.jpg"
            overlayValue={'rgba(0, 0, 0, 0.6)'}
            position={'bottom center'}
          />
          <RightContainer>
            {showLoader && currentAgentArr.length >= 1 ? (
              <LoadGif />
            ) : (
              <AgentWrapper>
                {currentAgentArr.map((agent) => (
                  <AgentSingle
                    key={agent.snapID}
                    contact={agent.contact}
                    location={agent.location}
                    name={agent.name}
                    user={agent.user}
                    clickFunc={() => {
                      navigate(agent.snapID, { state: agent });
                    }}
                  />
                ))}
              </AgentWrapper>
            )}
            <NavDots
              onClickLeft={() => {
                prevItem(
                  countVar,
                  setCountVar,
                  divKey,
                  setDivKey,
                  setCurrentAgentArr,
                  agentsArr
                );
              }}
              onClickRight={() => {
                nextItem(
                  countVar,
                  setCountVar,
                  divKey,
                  setDivKey,
                  setCurrentAgentArr,
                  agentsArr
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

export default AgentsPage;
