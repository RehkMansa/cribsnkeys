import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import { FaUpload } from 'react-icons/fa';
import { useState } from 'react';
const Wrapper = styled.div`
  padding: 40px 20px;
  background-color: rgba(7, 12, 31, 0.8);
  border-radius: 10px;
  cursor: pointer;
  color: var(--white);
  & > * {
    outline: none;
  }
  .text-content {
    outline: none;
    display: flex;
    gap: 20px;
    justify-content: space-evenly;
  }
`;

const ImageUploader = ({ title, onClickFunc, className }) => {
  const [fileName, setFileName] = useState('');
  return (
    <Dropzone onDrop={onClickFunc}>
      {({ getRootProps, getInputProps }) => (
        <Wrapper className={className} onClick={onClickFunc}>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <div className="text-content">
              {fileName ? (
                <p>Filename: {fileName}</p>
              ) : (
                <>
                  <FaUpload />
                  <p>{title}</p>
                </>
              )}
            </div>
          </div>
        </Wrapper>
      )}
    </Dropzone>
  );
};

export default ImageUploader;
