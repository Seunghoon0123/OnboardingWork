import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';

interface PropsTypes {
  isAgree: boolean;
  setIsAgree: React.Dispatch<React.SetStateAction<boolean>>;
}

const AgreeCheckBox = ({ isAgree, setIsAgree }: PropsTypes) => {
  const clickAgree = () => {
    setIsAgree((prev) => !prev);
  };

  return (
    <Container>
      <CheckContainer>
        <CheckIcon onClick={clickAgree} style={{ opacity: isAgree ? 1 : 0.2 }}>
          <Image src="/AgreeCheckIcon.svg" width={20} height={20} alt="(V)" />
        </CheckIcon>
        <CheckDescription>서비스 약관 및 개인정보 처리 동의</CheckDescription>
      </CheckContainer>
      <LookMoreDetail>보기</LookMoreDetail>
    </Container>
  );
};

export default AgreeCheckBox;

const Container = styled.div`
  /* Frame 2755 */
  ${(props) => props.theme.flexRowSet.spaceBetween}

  /* Gray/50 */
  height:48px;
  padding-left: 14px;
  padding-right: 24px;
  background: #f6f8f9;
  border-radius: 8px;
`;

const CheckContainer = styled.div`
  ${(props) => props.theme.flexRowSet.center}
`;

const CheckIcon = styled.div`
  ${(props) => props.theme.flexRowSet.center}
  &:hover {
    cursor: pointer;
  }
`;

const CheckDescription = styled.div`
  /* 서비스 약관 및 개인정보 처리방침에 동의합니다. */
  margin-left: 18px;
  /* Label/S/500 */

  ${(props) => props.theme.fontSet.pretendard}
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  /* identical to box height, or 114% */

  color: #000000;
`;

const LookMoreDetail = styled.div`
  ${(props) => props.theme.fontSet.pretendard}
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  /* identical to box height, or 114% */

  text-align: center;
  text-decoration-line: underline;

  /* Gray / 500 */

  color: #757575;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
