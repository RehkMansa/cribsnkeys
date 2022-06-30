import Dropzone from 'react-dropzone';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
`;

const ImageUploader = ({ title }) => {
  return (
    <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <Wrapper>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>{title}</p>
          </div>
        </Wrapper>
      )}
    </Dropzone>
  );
};

export default ImageUploader;
