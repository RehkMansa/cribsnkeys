import styled from 'styled-components';
import {
  FaGoogle,
  FaHome,
  FaSignOutAlt,
  FaUserAlt,
  FaVihara,
  FaUserCheck,
} from 'react-icons/fa';
import { RiLoginBoxFill } from 'react-icons/ri';
import MenuItems from './MenuItems';
import { auth, signInWithGoogle } from './firebase/utils';
import { toggleStateVar } from './utils/helpers';

const Wrapper = styled.div`
  display: flex;
  // flex-wrap: wrap;
  gap: 10px;
  color: ${(props) => (props.color ? 'var(--gold)' : 'var(--blue)')};
  background-color: ${(props) => (props.color ? props.color : 'var(--gold)')};
  padding: 10px;
  border-radius: 50px;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    top:0;
    right:0;
    justify-content: center;
    background-color: transparent;

    & > * {
      width: calc(35% - 20px);
    }
  }
`;

const RightFloatingMenu = ({ loginState, setLogin, user, bgColor }) => {
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
    {
      id: 3,
      name: 'Cribs',
      icon: <FaVihara />,
      link: '/cribs',
    },
    {
      id: 4,
      name: 'Agents',
      icon: <FaUserCheck />,
      link: '/agents',
    },
  ];
  return (
    <Wrapper color={bgColor}>
      {!user ? (
        menuItems.map((menu) => (
          <MenuItems
            key={menu.id}
            icon={menu.icon}
            link={menu.link}
            title={menu.name}
            clickFunc={menu.function}
          />
        ))
      ) : (
        <>
          <MenuItems icon={<FaHome />} title={'Home'} link="/" />
          <MenuItems icon={<FaVihara />} title={'Cribs'} link="/cribs" />
          <MenuItems icon={<FaUserCheck />} title={'Agents'} link="/agents" />
          <MenuItems
            icon={<FaUserAlt />}
            title={
              !user.displayName
                ? user.email.replace('@gmail.com', '')
                : user.displayName
            }
            link="/user"
          />
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
