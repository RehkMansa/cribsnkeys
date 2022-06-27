import styled from 'styled-components';
import { FaGoogle, FaHome } from 'react-icons/fa';
import { RiLoginBoxFill } from 'react-icons/ri';
import MenuItems from './MenuItems';
import { signInWithGoogle } from './firebase/utils';
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

const RightFloatingMenu = ({ loginState, setLogin }) => {
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
      {menuItems.map((menu) => (
        <MenuItems
          key={menu.id}
          icon={menu.icon}
          link={menu.link}
          title={menu.name}
          onClickFunc={menu.function}
        />
      ))}
    </Wrapper>
  );
};

export default RightFloatingMenu;
