import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

interface Props {
  name?: string;
}

const Footer = ({ name }: Props) => {
  return (
    <Container>
      <InnerContainer>
        <OntolLogo>
          <Image src="/OntolLogo.svg" width={72.39} height={19.91} alt="(V)" />
        </OntolLogo>
        <FooterMenu>
          <Subject>메뉴</Subject>
          <Items>
            <ItemContent1>검사지 업로드</ItemContent1>
            <ItemContent2>이용 가이드</ItemContent2>
            <ItemContent3>설정</ItemContent3>
          </Items>
        </FooterMenu>
        <FooterQuestion>
          <Subject>문의</Subject>
          <Items>
            <ItemContent1>의사 등록</ItemContent1>
            <ItemContent2>제휴 문의</ItemContent2>
          </Items>
        </FooterQuestion>

        <CustomerSupport>
          <Subject>고객지원</Subject>
          <Items>
            <ItemContent1>공지사항</ItemContent1>
            <ItemContent2>자주 묻는 질문</ItemContent2>
            <ItemContent3>1대1 문의</ItemContent3>
          </Items>
        </CustomerSupport>
        <ContactsContainer>
          <TwiterContainer>
            <Contact>
              <CircleBackGround>
                <Image src="/Twiter.svg" width={14.32} height={11.64} alt="Twiter" />
              </CircleBackGround>
            </Contact>
          </TwiterContainer>
          <FacebookContainer>
            <Contact>
              <CircleBackGround>
                <Image src="/Facebook.svg" width={14.32} height={11.64} alt="Twiter" />
              </CircleBackGround>
            </Contact>
          </FacebookContainer>
          <InstagramContainer>
            <Contact>
              <CircleBackGround>
                <Image src="/Instagram.svg" width={14.32} height={11.64} alt="Twiter" />
              </CircleBackGround>
            </Contact>
          </InstagramContainer>
        </ContactsContainer>
        <AppContactContainer>
          <Google>
            <Logo>
              <Image src="/Playstore.svg" width={23} height={25.7} alt="GooglePlay" />
            </Logo>
            <Texto>
              <Comment>GET IT ON</Comment>
              <Image src="/Google Play.svg" width={23} height={25.7} alt="GooglePlay" />
            </Texto>
          </Google>
          <Apple>
            <Logo>
              <Image src="/AppleLogo.svg" width={23} height={25.7} alt="GooglePlay" />
            </Logo>
            <Texto>
              <Comment>Download on the</Comment>
              <Image src="/App Store.svg" width={23} height={25.7} alt="GooglePlay" />
            </Texto>
          </Apple>
        </AppContactContainer>
      </InnerContainer>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  /* Footer */

  position: absolute;
  width: 1440px;
  height: 360px;
  bottom: 0px;

  /* Background */

  background: #fcfcfc;
  /* border-top */

  box-shadow: inset 0px 1px 0px #eeeeee;
`;

const InnerContainer = styled.div`
  /* Frame 2823 */

  position: absolute;
  width: 1040px;
  height: 264px;
  left: 200px;
  top: 48px;
`;

const OntolLogo = styled.div`
  /* Ontol Logo */

  position: absolute;
  width: 72.5px;
  height: 20px;
  left: 0px;
  top: 0px;

  img {
    /* Vector */

    position: absolute;
    left: 0.11%;
    right: 0.03%;
    top: 0.44%;
    bottom: 0.03%;
  }
`;

const Subject = styled.div`
  /* 메뉴 */

  position: absolute;
  height: 16px;
  top: 0px;

  /* Label/XS/700 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */

  /* Gray / 700 */

  color: #333333;
`;

const Items = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  position: absolute;
  height: 64px;
  top: 32px;
`;

const ItemContent1 = styled.div`
  /* 검사지 업로드 */

  height: 16px;

  /* Label/XS/500 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */

  /* Gray / 500 */

  color: #757575;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ItemContent2 = styled.div`
  /* 검사지 업로드 */

  height: 16px;

  /* Label/XS/500 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */

  /* Gray / 500 */

  color: #757575;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ItemContent3 = styled.div`
  /* 검사지 업로드 */

  height: 16px;

  /* Label/XS/500 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */

  /* Gray / 500 */

  color: #757575;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const FooterMenu = styled.div`
  /* Group 140 */

  position: absolute;
  width: 66px;
  height: 96px;
  left: 264px;
  top: 0px;
`;

const FooterQuestion = styled.div`
  /* Group 142 */

  position: absolute;
  width: 69px;
  height: 96px;
  left: 440px;
  top: 0px;
`;

const CustomerSupport = styled.div`
  /* Group 142 */

  position: absolute;
  width: 69px;
  height: 96px;
  left: 616px;
  top: 0px;
`;

const ContactsContainer = styled.div`
  /* Group 143 */

  position: absolute;
  width: 96px;
  height: 24px;
  left: 944px;
  top: 0px;
`;

const TwiterContainer = styled.div`
  /* ic/sns/TwitterBlack */

  position: absolute;
  width: 24px;
  height: 24px;
  right: 72px;
  top: 0px;
`;

const FacebookContainer = styled.div`
  /* ic/sns/FacebookBlack */

  position: absolute;
  width: 24px;
  height: 24px;
  right: 36px;
  top: 0px;
`;

const InstagramContainer = styled.div`
  /* ic/sns/InstagramBlack */

  position: absolute;
  width: 24px;
  height: 24px;
  right: 0px;
  top: 0px;
`;

const Contact = styled.div`
  /* Twitter */

  position: absolute;
  width: 24px;
  height: 24px;
  left: 0px;
  top: 0px;
`;

const CircleBackGround = styled.div`
  /* Rectangle */

  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  /* Gray/300 */

  background: #cbcbcb;
  border-radius: 24px;

  img {
    position: absolute;
    left: 20.83%;
    right: 19.48%;
    top: 27.08%;
    bottom: 24.4%;
  }
`;

const AppContactContainer = styled.div`
  /* Group 136 */

  position: absolute;
  width: 268px;
  height: 40px;
  left: 772px;
  top: 224px;
`;

const Google = styled.div`
  /* Google */

  box-sizing: border-box;

  position: absolute;
  width: 130px;
  height: 40px;
  right: 138px;
  bottom: 0px;

  background: #ffffff;
  border: 1px solid #a6a6a6;
  border-radius: 6px;
`;

const Apple = styled.div`
  /* Apple */

  box-sizing: border-box;

  position: absolute;
  width: 130px;
  height: 40px;
  right: 0px;
  bottom: 0px;

  background: #ffffff;
  border: 1px solid #a6a6a6;
  border-radius: 6px;
`;

const Logo = styled.div`
  /* Logo */

  position: absolute;
  left: 6.9%;
  right: 75.35%;
  top: 17.88%;
  bottom: 17.88%;
`;

const Texto = styled.div`
  /* Texto */

  position: absolute;
  left: 29.23%;
  right: 30.56%;
  top: 12.5%;
  bottom: 12.43%;

  img {
    position: absolute;
    width: 84.78px;
    height: 17.03px;
    left: calc(50% - 84.78px / 2 + 15.39px);
    top: calc(50% - 17.03px / 2 + 6.51px);
  }
`;

const Comment = styled.div`
  /* get it on */

  position: absolute;
  width: 95px;
  height: 11px;
  left: calc(50% - 39px / 2 - 7.5px);
  top: calc(50% - 11px / 2 - 9.5px);

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 11px;
  /* identical to box height */

  letter-spacing: -0.03em;
  text-transform: uppercase;

  color: #666666;
`;
