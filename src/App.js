import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styledComponents from 'styled-components';
import Error404 from './components/Error404';
import { auth, checkUserDB } from './components/firebase/utils';
import HomePage from './components/HomePage';
import GlobalStyles from './components/styles/Global';
import UserPage from './components/UserPage';
const Container = styledComponents.main`
  
`;

function App() {
  const [currentUser, setCurrentUser] = useState('');

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
        <Route path="/" element={<HomePage userData={currentUser} />} />
        <Route path="/user" element={<UserPage userData={currentUser} />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Container>
  );
}

export default App;

