import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const AgreeCheckBox = () => {
  return (
    <Container>
      <CheckIcon>
        <Image src="/AgreeCheckIcon.svg" width={20} height={20} alt="(V)" />
      </CheckIcon>
      <CheckDescription>서비스 약관 및 개인정보 처리방침에 동의합니다.</CheckDescription>
      <LookMoreDetail>보기</LookMoreDetail>
    </Container>
  );
};

export default AgreeCheckBox;

const Container = styled.div`
  /* Frame 2755 */

  position: absolute;
  width: 512px;
  height: 48px;
  left: 464px;
  top: 1069px;

  /* Gray/50 */

  background: #f6f8f9;
  border-radius: 8px;
`;

const CheckIcon = styled.div`
  /* Icon/Checkmark Circle */

  position: absolute;
  width: 24px;
  height: 24px;
  left: 12px;
  top: 12px;

  img {
    /* Shape */

    position: absolute;
    left: 8.33%;
    right: 8.33%;
    top: 8.33%;
    bottom: 8.33%;
  }
`;

const CheckDescription = styled.div`
  /* 서비스 약관 및 개인정보 처리방침에 동의합니다. */

  position: absolute;
  left: 10.16%;
  right: 30.52%;
  top: 33.33%;
  bottom: 33.33%;

  /* Label/S/500 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  /* identical to box height, or 114% */

  color: #000000;
`;

const LookMoreDetail = styled.div`
  position: absolute;
  left: 90.43%;
  right: 4.69%;
  top: 33.33%;
  bottom: 33.33%;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  /* identical to box height, or 114% */

  text-align: center;
  text-decoration-line: underline;

  /* Gray / 500 */

  color: #757575;
`;
