import styled from 'styled-components';
import ImageUploader from './ImageUploader';

const FormWrapper = styled.div`
  gap: 20px;
  width: ${(props) => props.formWidth};
  h3 {
    text-align: center;
    font-size: 40px;
    margin-bottom: 20px;
  }
  .uploader {
    padding: 20px;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }

  input,
  button {
    border-radius: 10px;
    color:#000;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
`;

const UserForm = ({ width }) => {
  return (
    <FormWrapper formWidth={width} className="form-flex">
      <h3>Become an agent</h3>
      <input type="text" required placeholder="Enter Display Name" />
      <input type="text" required name="" placeholder="Enter User Name" id="" />
      <input type="tel" required name="" placeholder="Phone number" id="" />
      <input type="email" name="" placeholder="Enter Email" id="" />
      <h4>Location Details</h4>
      <Row>
        <input type="text" required name="" placeholder="State" id="" />
        <input type="tel" required name="" placeholder="City" id="" />
        <input type="email" name="" placeholder="Street" id="" />
      </Row>
      <input type="email" name="" placeholder="Home Address" id="" />
      <ImageUploader title={'Click To Upload Profile Picture'} />
      <button>Submit</button>
    </FormWrapper>
  );
};

export default UserForm;
