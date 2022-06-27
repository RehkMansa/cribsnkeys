import styled from 'styled-components';
import { FiHome, FiLogIn, FiExternalLink } from 'react-icons/fi';
import MenuItems from './MenuItems';
// import { useState } from 'react';

const Wrapper = styled.div``;

const menuItems = [
  {
    id: 0,
    name: home,
    icon: <FiHome />,
    link: '/',
  },
  {
    id: 1,
    name: home,
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

      <div>
        <MenuItems icon={<FiExternalLink />} title={'Sign In'} />
      </div>
    </Wrapper>
  );
};

export default RightFloatingMenu;
