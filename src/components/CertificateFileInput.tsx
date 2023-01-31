import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const CertificateFileInput = () => {
  return (
    <Container>
      <BaseLine>
        <UploadDescription>이곳에 파일을 첨부해주세요.</UploadDescription>
        <FileSearchButton>
          <ButtonLabel>파일 찾기</ButtonLabel>
        </FileSearchButton>
      </BaseLine>
    </Container>
  );
};

export default CertificateFileInput;

const Container = styled.div`
  /* File drop / Enabled */

  position: absolute;
  width: 512px;
  height: 136px;
  left: 464px;
  top: 809px;

  border-radius: 16px;
`;

const BaseLine = styled.div`
  /* Base */

  box-sizing: border-box;

  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  /* Gray/50 */

  background: #f6f8f9;
  /* Gray/100 */

  border: 2px dashed #e9edef;
  border-radius: 16px;
`;

const UploadDescription = styled.div`
  /* 이곳에 파일을 올려 첨부해주세요 */

  position: absolute;
  width: 180px;
  height: 16px;
  left: 166px;
  top: 38px;

  /* Label/S/400 */

  font-family: 'Pretendard';
  font-style: normal;
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

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 10px;

  position: absolute;
  width: 126px;
  height: 32px;
  left: 193px;
  top: 62px;

  /* Blue/50 */

  background: #eff3fe;
  border: 0 none;
  border-radius: 32px;
`;

const ButtonLabel = styled.div`
  /* Label */

  height: 16px;

  /* Label/S/500 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  /* identical to box height, or 114% */

  text-align: center;

  /* Blue/400 */

  color: #0039ff;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
