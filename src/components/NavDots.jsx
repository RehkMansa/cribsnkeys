import styled from 'styled-components';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Wrapper = styled.div`
  width: 300px !important;
  height: 50px;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    width: 50px;
    height: 50px;
    align-items: center;
    display: flex;
    padding: 10px;
    font-size: 24px;
    background-color: #f2b636;
    color: #060b1e;
  }
  .left {
    border-radius: 50px;
  }
  .right {
    border-radius: 50px;
    justify-content: flex-end;
  }
`;
const NavDots = ({ onClickLeft, onClickRight }) => {
  return (
    <Wrapper>
      <div onClick={onClickLeft} className="left">
        <AiOutlineLeft />
      </div>
      <div onClick={onClickRight} className="right">
        <AiOutlineRight />
      </div>
    </Wrapper>
  );
};

export default NavDots;
