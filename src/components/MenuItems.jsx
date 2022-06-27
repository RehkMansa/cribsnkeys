import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  .menu-title {
  }
`;

const MenuItems = ({ icon, title, link }) => {
  const navigate = useNavigate();

  const redirectTo = () => {
    navigate(link);
  };

  return (
    <Wrapper onClick={redirectTo}>
      {icon}
      <div className="menu-title">{title}</div>
    </Wrapper>
  );
};

export default MenuItems;
