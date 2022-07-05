import AgentSingle from './AgentSingle';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import LeftContainer from './LeftContainer';
import { Wrapper } from './HomePage';

const AgentCard = () => {
  const { state } = useLocation();
  const [agentData] = useState(state);
  return (
    <Wrapper>
      <LeftContainer bgImage={'smiling-agent.jpg'} />
    </Wrapper>
  );
};

export default AgentCard;
