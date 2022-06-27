import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  width: 100vw;
  height: 100vh;

  h3 {
    font-size: 60px;
    margin-bottom: 20px;
  }

  a {
    padding: 10px 30px;
    border: 2px solid var(--gold);
    border-radius: 50px;
    color: var(--gold);
  }
`;
const Error404 = () => {
  return (
    <Wrapper>
      <h3>Page Not found</h3>
      <Link to={'/'}>Go Home</Link>
    </Wrapper>
  );
};

export default Error404;
