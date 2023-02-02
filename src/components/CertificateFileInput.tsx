import React, { useState } from 'react';
import styled from 'styled-components';

interface PropsTypes {
  setCertificateFile: React.Dispatch<React.SetStateAction<File | undefined>>;
}

const CertificateFileInput = ({ setCertificateFile }: PropsTypes) => {
  const [fileName, setFileName] = useState<string>();
  const [fileSize, setFileSize] = useState<number>();

  const fileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      const maxSize = 5000000;
      const file = event.target.files[0];
      setCertificateFile(file);

      if (file.size > maxSize) alert('해당 파일은 제한된 용량(5MB)을 초과하였습니다.');
      else {
        setFileName(file.name);
        setFileSize(file.size);
      }
    }
  };

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const maxSize = 5000000;
    const file = event.dataTransfer.files[0];
    const isImageTypeRigt =
      file.type.split('/')[1] === 'png' || file.type.split('/')[1] === 'jpeg' || file.type.split('/')[1] === 'webp' || file.type.split('/')[1] === 'pdf';

    if (!isImageTypeRigt) {
      alert('파일형식은 .webp, .jpeg, .png .pdf 만 가능합니다.');
    } else if (file.size > maxSize) {
      alert('해당 파일은 제한된 용량(5MB)을 초과하였습니다.');
    } else {
      setFileName(file.name);
      setFileSize(file.size);
      setCertificateFile(file);
    }
    const target = event.target as HTMLElement;
    target.style.backgroundColor = '';
  };

  const onDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const target = event.target as HTMLElement;
    target.style.backgroundColor = 'lightblue';
  };

  const onDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const target = event.target as HTMLElement;
    target.style.backgroundColor = '';
  };

  const fileDelete = () => {
    setCertificateFile({});
    setFileName('');
    setFileSize('');
  };

  return (
    <Container>
      <BaseLine
        onDrop={onDrop}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={(event) => {
          event.preventDefault();
        }}
      >
        {fileName && fileSize ? (
          <>
            <UploadDescription>{fileName}</UploadDescription>
            <UploadDescription>{`${(fileSize / 1000000).toFixed(1)} MB`}</UploadDescription>
            <FileDeleteButton onClick={fileDelete}>파일 삭제</FileDeleteButton>
          </>
        ) : (
          <>
            <UploadDescription>이곳에 파일을 첨부해주세요.(제한 5MB)</UploadDescription>
            <FileSearchButton>
              <ButtonLabel htmlFor="fileInput">파일 찾기</ButtonLabel>
              <FileInput id="fileInput" type="file" accept=".webp, .jpeg, .png .pdf" onChange={fileImport} />
            </FileSearchButton>
          </>
        )}
      </BaseLine>
    </Container>
  );
};

export default CertificateFileInput;

const Container = styled.div`
  /* File drop / Enabled */
  height: 136px;
  border-radius: 16px;
`;

const BaseLine = styled.div`
  /* Base */
  ${(props) => props.theme.flexCustomSet({ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' })}
  height: 100%;
  box-sizing: border-box;

  /* Gray/50 */

  background: #f6f8f9;
  /* Gray/100 */

  border: 2px dashed #e9edef;
  border-radius: 16px;
`;

const UploadDescription = styled.div`
  /* 이곳에 파일을 올려 첨부해주세요 */

  /* Label/S/400 */

  ${(props) => props.theme.fontSet.pretendard}
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  /* identical to box height, or 114% */

  text-align: center;

  /* Gray / 500 */

  color: #757575;
`;

const FileSearchButton = styled.button`
  /* Button/S/Secondary/Default */

  /* Auto layout */

  ${(props) => props.theme.flexRowSet.center}
  margin-top: 8px;
  padding: 8px 37px;

  /* Blue/50 */

  background: #eff3fe;
  border-radius: 32px;
`;

const ButtonLabel = styled.label`
  /* Label */

  height: 16px;

  /* Label/S/500 */

  ${(props) => props.theme.fontSet.pretendard}
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  /* identical to box height, or 114% */

  text-align: center;

  /* Blue/400 */

  color: #0039ff;

  /* Inside auto layout */

  :hover {
    cursor: pointer;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const FileDeleteButton = styled.button`
  /* Button/S/Secondary/Default */

  /* Auto layout */

  ${(props) => props.theme.flexRowSet.center}
  margin-top: 8px;
  padding: 6px 27px;

  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: tomato;

  /* Blue/50 */

  background: #eff3fe;
  border-radius: 32px;
`;
