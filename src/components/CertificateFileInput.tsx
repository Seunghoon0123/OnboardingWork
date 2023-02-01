import React from 'react';
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

const ButtonLabel = styled.div`
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

  flex: none;
  order: 0;
  flex-grow: 0;
`;
