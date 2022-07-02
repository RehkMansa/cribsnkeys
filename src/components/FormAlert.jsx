import styled from 'styled-components';
import { FaWindowClose } from 'react-icons/fa';

const Wrapper = styled.div`
  text-align: center;
  padding: 20px;
  background-color: rgba(135, 140, 155, 0.3);
  border-radius: 2px;
  position: relative;
  color: #fff;
  .close-alert {
    cursor: pointer;
    position: absolute;
    top: 1px;
    right: 1px;
  }
`;

const FormAlert = ({ alertVar, alertState }) => {
  return (
    <>
      {alertVar && (
        <Wrapper>
          {alertVar}
          <div
            onClick={() => {
              alertState('');
            }}
            className="close-alert"
          >
            <FaWindowClose />
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default FormAlert;
