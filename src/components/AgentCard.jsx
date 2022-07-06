import AgentSingle from './AgentSingle';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LeftContainer from './LeftContainer';
import { RightContainer, Wrapper } from './HomePage';
import styled from 'styled-components';
import { queryDB } from './firebase/utils';

const ContentWrap = styled.div`
  background-color: rgba(7, 12, 31, 0.9);
  width: 100%;
  border-radius: 20px;
`;

const AgentCard = () => {
  const { state } = useLocation();
  const [agent] = useState(state);

  useEffect(() => {
    // console.log(state);
    queryDB('cribs', 'agent.uid', state.snapID).then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <Wrapper>
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
        <AgentSingle
          contact={agent.contact}
          location={agent.location}
          name={agent.name}
          user={agent.user}
        />
      </RightContainer>
    </Wrapper>
  );
};

export default AgentCard;
