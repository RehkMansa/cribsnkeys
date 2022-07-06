import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styledComponents from 'styled-components';
import AgentCard from './components/AgentCard';
import AgentsPage from './components/AgentsPage';
import CribCard from './components/CribCard';
import Cribs from './components/Cribs';
import Error404 from './components/Error404';
import { auth, checkUserDB } from './components/firebase/utils';
import HomePage from './components/HomePage';
import LoginComponent from './components/LoginComponent';
import RightFloatingMenu from './components/RightFloatingMenu';
import GlobalStyles from './components/styles/Global';
import UserPage from './components/UserPage';
const Container = styledComponents.main`
  overflow: hidden;
  position: relative;

  .flex20{
    display: flex;
    gap: 20px
  }
  .column{
    flex-direction: column;
  }
  .center{
    justify-content: center;
    align-items: center;
  }
`;

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [login, setLogin] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        const uRef = await checkUserDB('users', user);
        onSnapshot(uRef, (snapshot) => {
          setCurrentUser({ ...snapshot.data(), uid });

          let newVal = { ...snapshot.data(), uid };
          console.log(newVal);
        });
      } else {
        console.log('user not logged in');
        setCurrentUser(null);
      }
    });
  }, []);
  return (
    <Container className="App">
      <GlobalStyles />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              userData={currentUser}
              setShowLogin={setLogin}
              showLogin={login}
            />
          }
        />
        <Route path="/user" element={<UserPage userData={currentUser} />} />
        <Route path="/cribs" element={<Cribs userData={currentUser} />} />
        <Route
          path="/cribs/:id"
          element={<CribCard userData={currentUser} />}
        />
        <Route path="/agents" element={<AgentsPage userData={currentUser} />} />
        <Route
          path="/agents/:id"
          element={<AgentCard userData={currentUser} />}
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <RightFloatingMenu
        loginState={login}
        user={currentUser}
        setLogin={setLogin}
      />

      {login && <LoginComponent setShowLoginState={setLogin} />}
    </Container>
  );
}

export default App;
