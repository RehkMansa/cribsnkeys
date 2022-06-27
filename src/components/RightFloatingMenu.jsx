import styled from 'styled-components';
import { FiHome, FiLogIn, FiExternalLink } from 'react-icons/fi';
import MenuItems from './MenuItems';
import { signInWithGoogle } from './firebase/utils';
// import { useState } from 'react';

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

const menuItems = [
  {
    id: 0,
    name: 'Home',
    icon: <FiHome />,
    link: '/',
  },
  {
    id: 1,
    name: 'Login',
    icon: <FiLogIn />,
  },
];

const RightFloatingMenu = () => {
  // const [menu, setMenu] = useState(menuItems);
  return (
    <Wrapper>
      {menuItems.map((menu) => (
        <MenuItems
          key={menu.id}
          icon={menu.icon}
          link={menu.link}
          title={menu.name}
        />
      ))}

      <div onClick={signInWithGoogle}>
        <MenuItems icon={<FiExternalLink />} title={'Google Sign In'} />
      </div>
    </Wrapper>
  );
};

export default RightFloatingMenu;
