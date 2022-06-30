import styled from 'styled-components';
import { FaGoogle, FaHome, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { RiLoginBoxFill } from 'react-icons/ri';
import MenuItems from './MenuItems';
import { auth, signInWithGoogle } from './firebase/utils';
import { toggleStateVar } from './utils/helpers';

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  color: var(--blue);
  background-color: var(--gold);
  padding: 10px;
  border-radius: 50px;
  position: absolute;
  top: 30px;
  right: 20px;
`;

const RightFloatingMenu = ({ loginState, setLogin, user }) => {
  let { email, displayName } = user;
  if(displayName === undefined){
    displayName = 'Complete Your registration'
  }
  const menuItems = [
    {
      id: 0,
      name: 'Home',
      icon: <FaHome />,
      link: '/',
    },
    {
      id: 1,
      name: 'Login',
      icon: <RiLoginBoxFill />,
      function: () => {
        toggleStateVar(loginState, setLogin);
      },
    },
    {
      id: 2,
      name: 'Sign In',
      icon: <FaGoogle />,
      function: signInWithGoogle,
    },
  ];
  return (
    <Wrapper>
      {!user ? (
        menuItems.map((menu) => (
          <MenuItems
            key={menu.id}
            icon={menu.icon}
            link={menu.link}
            title={menu.name}
            onClickFunc={menu.function}
          />
        ))
      ) : (
        <>
          <MenuItems icon={<FaHome />} title={'Home'} link="/" />
          <MenuItems icon={<FaUserAlt />} title={displayName} link="/user" />
          <div
            onClick={() => {
              auth.signOut();
            }}
          >
            <MenuItems icon={<FaSignOutAlt />} title={'Log Out'} link="/" />
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default RightFloatingMenu;
