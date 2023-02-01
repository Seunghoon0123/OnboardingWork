import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Background>
      <Container>
        <InnerContainer>
          <UpperContainer>
            <OntolLogo>
              <Image src="/OntolLogo.svg" width={72.39} height={19.91} alt="(V)" />
            </OntolLogo>
            <FooterMenu>
              <Subject>메뉴</Subject>
              <Items>
                <ItemContent>검사지 업로드</ItemContent>
                <ItemContent>이용 가이드</ItemContent>
                <ItemContent>설정</ItemContent>
              </Items>
            </FooterMenu>
            <FooterMenu>
              <Subject>문의</Subject>
              <Items>
                <ItemContent>의사 등록</ItemContent>
                <ItemContent>제휴 문의</ItemContent>
              </Items>
            </FooterMenu>

            <FooterMenu>
              <Subject>고객지원</Subject>
              <Items>
                <ItemContent>공지사항</ItemContent>
                <ItemContent>자주 묻는 질문</ItemContent>
                <ItemContent>1대1 문의</ItemContent>
              </Items>
            </FooterMenu>
            <ContactsContainer>
              <ContactItemContainer>
                <Image src="/Twiter.svg" width={14.32} height={11.64} alt="Twiter" />
              </ContactItemContainer>
              <ContactItemContainer>
                <Image src="/Facebook.svg" width={14.32} height={11.64} alt="Twiter" />
              </ContactItemContainer>
              <ContactItemContainer>
                <Image src="/Instagram.svg" width={14.32} height={11.64} alt="Twiter" />
              </ContactItemContainer>
            </ContactsContainer>
          </UpperContainer>
          <LowerContainer>
            <RemarkContainer>
              <div>서비스 이용약관 | 개인정보 처리방침</div>
              <div>ⓒ 2022 Tesser Corp. All rights reserved.</div>
            </RemarkContainer>
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
          </LowerContainer>
        </InnerContainer>
      </Container>
    </Background>
  );
};

export default Footer;

const Background = styled.div`
  ${(props) =>
    `
      @media (min-width: ${props.theme.browserWidthSize.bigWindow}) {
        height: 360px;
      }
      @media (min-width: ${props.theme.browserWidthSize.middleWindow}) and (max-width: ${props.theme.browserWidthSize.bigWindow}) {
        height: 488px;
      }
      @media (max-width: ${props.theme.browserWidthSize.middleWindow}) {
        height: 576px;
    }
    `}
  ${(props) => props.theme.flexCustomSet({ flexDirection: '', justifyContent: 'center', alignItems: '' })}
  width: 100vw;
  background: #fcfcfc;
`;

const Container = styled.footer`
  /* Footer */
  ${(props) => props.theme.flexCustomSet({ flexDirection: '', justifyContent: 'center', alignItems: '' })}

  width: 1440px;
  padding: 48px 0px;
  /* border-top */
  box-shadow: inset 0px 1px 0px #eeeeee;
`;

const InnerContainer = styled.div`
  ${(props) =>
    props.theme.flexCustomSet({
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: '',
    })}
  /* Frame 2823 */

  width: 1040px;
`;

const UpperContainer = styled.div`
  ${(props) =>
    props.theme.flexCustomSet({
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: '',
    })}
`;
const LowerContainer = styled.div`
  ${(props) => props.theme.flexRowSet.spaceBetween}
`;

const OntolLogo = styled.div`
  /* Ontol Logo */

  width: 72.5px;
  height: 20px;
`;

const Subject = styled.div`
  /* 메뉴 */

  height: 16px;

  /* Label/XS/700 */

  ${(props) => props.theme.fontSet.pretendard}
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */

  /* Gray / 700 */

  color: #333333;
`;

const Items = styled.div`
  ${(props) => props.theme.flexCustomSet({ flexDirection: 'column', justifyContent: '', alignItems: 'flex-start' })}
  /* Auto layout */
  margin-top: 16px;
  height: 64px;
`;

const ItemContent = styled.div`
  margin-bottom: 8px;

  /* Label/XS/500 */

  ${(props) => props.theme.fontSet.pretendard}
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */

  /* Gray / 500 */

  color: #757575;

  /* Inside auto layout */
`;

const FooterMenu = styled.div`
  /* Group 140 */

  height: 96px;
`;

const ContactsContainer = styled.div`
  ${(props) => props.theme.flexRowSet.spaceBetween}
  /* Group 143 */

  width: 96px;
  height: 24px;
`;

const ContactItemContainer = styled.div`
  ${(props) => props.theme.flexRowSet.center}
  background: #cbcbcb;

  width: 24px;
  height: 24px;
  border-radius: 24px;
`;

const RemarkContainer = styled.div`
  /* Label/XS/500 */

  ${(props) => props.theme.fontSet.pretendard}
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */

  /* Gray / 500 */

  color: #757575;
`;

const AppContactContainer = styled.div`
  ${(props) => props.theme.flexRowSet.spaceBetween}
  /* Group 136 */

  width: 268px;
  height: 40px;
`;

const Google = styled.div`
  ${(props) => props.theme.flexRowSet.center}
  /* Google */


  width: 130px;
  height: 40px;

  background: #ffffff;
  border: 1px solid #a6a6a6;
  border-radius: 6px;
`;

const Apple = styled.div`
  ${(props) => props.theme.flexRowSet.center}
  /* Apple */

  width: 130px;
  height: 40px;

  background: #ffffff;
  border: 1px solid #a6a6a6;
  border-radius: 6px;
`;

const Logo = styled.div`
  ${(props) =>
    props.theme.flexCustomSet({
      flexDirection: '',
      justifyContent: '',
      alignItems: 'flex-end',
    })}/* Logo */
`;

const Texto = styled.div`
  ${(props) => props.theme.flexCustomSet({ flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start' })}

  /* Texto */
  img {
    width: 84.78px;
    height: 17.03px;
  }
`;

const Comment = styled.div`
  /* get it on */

  width: 95px;
  height: 11px;

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
