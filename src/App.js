import { Route, Routes } from 'react-router-dom';
import styledComponents from 'styled-components';
import Error404 from './components/Error404';
import HomePage from './components/HomePage';
import GlobalStyles from './components/styles/Global';
const Container = styledComponents.main`
  
`;

function App() {
  return (
    <Container className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Container>
  );
}

export default App;
