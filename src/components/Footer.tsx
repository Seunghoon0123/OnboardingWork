import React from 'react';
import styled from 'styled-components';

interface Props {
  name?: string;
}

const Footer = ({ name }: Props) => {
  return (
    <Container>
      <Upper>
        <Title>Ontol</Title>
        <Collection>메뉴 문의 고객지원 등등등</Collection>
        <Contacts>트위터 페이스북 인스타</Contacts>
      </Upper>
      <Lower>
        <ETC>서비스 이용약관 | 개인정보 처리방침 등등등</ETC>
        <MarketContact>구글플레이, 앱스토어 그림 들어간다아</MarketContact>
      </Lower>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  position: absolute;
  width: 1440px;
  height: 360px;
  left: 0px;
  bottom: 0px;

  background: #fcfcfc;
  box-shadow: inset 0px 1px 0px #eeeeee;
`;

const Upper = styled.div``;
const Title = styled.div``;
const Collection = styled.div``;
const Contacts = styled.div``;
const Lower = styled.div``;
const ETC = styled.div``;
const MarketContact = styled.div``;
