import { useState } from 'react';
import { RightContainer, Wrapper } from './HomePage';
import LeftContainer from './LeftContainer';
import LoadGif from './LoadGif';
import UserForm from './UserForm';

const AgentsPage = ({ userData }) => {
  const [showLoader, setShowLoader] = useState(false);
  return (
    <>
      {userData ? (
        <Wrapper>
          <LeftContainer
            content={<UserForm user={userData} />}
            bgImage="agent-page.jpg"
            overlayValue={'rgba(0, 0, 0, 0.6)'}
            position={'bottom center'}
          />
          <RightContainer>
            <h4>Why me</h4>
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
