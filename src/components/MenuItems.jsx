import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: inset 0 0 10px rgba(7, 12, 31, 0.1);
`;

const MenuItems = ({ icon, title, link, clickFunc }) => {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => (link ? navigate(link) : clickFunc())}>
      {icon}
      <div>{title}</div>
    </Wrapper>
  );
};

export default MenuItems;
