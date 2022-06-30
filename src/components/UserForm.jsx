import styled from 'styled-components';

const FormWrapper = styled.div`
  gap: 20px;

  h3{
    text-align: center;
    font-size: 40px;
  }
`;

const UserForm = () => {
  return (
    <FormWrapper className="form-flex">
      <h3>Become an agent</h3>
      <input type="text" name="" placeholder="Enter Display Name" id="" />
      <input type="text" name="" placeholder="Enter User Name" id="" />
    </FormWrapper>
  );
};

export default UserForm;
