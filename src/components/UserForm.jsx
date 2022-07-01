import styled from 'styled-components';
import ImageUploader from './ImageUploader';

const FormWrapper = styled.div`
  gap: 20px;
  width: ${(props) => props.formWidth};
  h3 {
    text-align: center;
    font-size: 38px;
    margin-bottom: 20px;
    color: var(--gold);
  }

  input,
  button {
    border-radius: 10px;
    color: #000;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  position: relative;

  .labelAbsolute {
    position: absolute;
    right: 50px;
    top: 13px;
    font-family: karla;
    font-weight: 500;
    color: var(--grey);
  }
`;

const UserForm = ({ width }) => {
  return (
    <FormWrapper formWidth={width} className="form-flex">
      <h3>Do you want to be an agent ?</h3>
      <Row>
        <input type="text" required placeholder="First Name" />
        <input type="text" required placeholder="Middle name" />
        <input type="text" required placeholder="Surname" />
      </Row>
      <input type="text" required name="" placeholder="Enter Username" />
      <input type="tel" required name="" placeholder="Phone number" id="" />
      <Row>
        <input type="date" name="" placeholder="Age" id="" />
        <h5 className="labelAbsolute">Select Age</h5>
      </Row>
      <h4>Location Details</h4>
      <Row>
        <input type="text" required name="" placeholder="State" id="" />
        <input type="text" required name="" placeholder="City" id="" />
        <input type="text" name="" placeholder="Street" id="" />
      </Row>
      <input type="text" name="" placeholder="Home Address" id="" />
      <ImageUploader title={'Click To Upload Profile Picture'} />
      <button>Submit</button>
    </FormWrapper>
  );
};

export default UserForm;
