import { useEffect, useState } from 'react';
import AgentSingle from './AgentSingle';
import { fetchAll } from './firebase/utils';
import { RightContainer, Wrapper } from './HomePage';
import LeftContainer from './LeftContainer';
import LoadGif from './LoadGif';
import UserForm from './UserForm';

const AgentsPage = ({ userData }) => {
  const [showLoader, setShowLoader] = useState(false);
  const [agentsArr, setAgentsArr] = useState([]);
  const [divKey, setDivKey] = useState(0);
  const [currentAgentArr, setCurrentAgentArr] = useState([]);
  const [countVar, setCountVar] = useState(1);
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
              currentAgentArr.map((agent) => (
                <AgentSingle
                  key={agent.snapID}
                  contact={agent.contact}
                  location={agent.location}
                  name={agent.name}
                  user={agent.user}
                  // width
                />
              ))
            )}
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
