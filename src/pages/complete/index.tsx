import Header from '@/components/Header';
import Footer from '@/components/Footer';

import styled from 'styled-components';
import Image from 'next/image';

const Home = () => {
  return (
    <BackGround>
      <Header />
      <Container>
        <Checkmark>
          <Image src="/Checkmark.svg" width={66.67} height={66.67} alt="Checked!" />
        </Checkmark>
        <CompleteMessage>의료인 등록이 접수되었습니다.</CompleteMessage>
        <CompleteDescription>
          인증 확인이 완료되면 이메일을 통해 안내드리겠습니다. 보통 1 - 2 영업일 이내에 완료됩니다. 전체 승인 과정은 다음과 같은 절차를 통해 진행됩니다.
        </CompleteDescription>
        <Ellipse1 />
        <Line2 />
        <Ellipse2 />
        <Line3 />
        <Ellipse3 />
        <AuthenticationCheck>인증 확인</AuthenticationCheck>
        <AuthenticationDescription>올려주신 내용을 바탕으로 인증을 확인합니다.</AuthenticationDescription>
        <InformationSubmission>필수 정보 제출</InformationSubmission>
        <InformationDescription>정산에 필요한 계좌 정보 등을 이메일 안내에 따라 제출합니다.</InformationDescription>
        <Qualificaion>해석인 자격 획득</Qualificaion>
        <QualificationDescription>준비가 완료되면 해석인으로 활동을 시작할 수 있습니다.</QualificationDescription>
        <HomeButton>
          <ButtonLabel>홈으로</ButtonLabel>
        </HomeButton>
      </Container>
      <Footer />
    </BackGround>
  );
};

export default Home;

const BackGround = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 1786px;
`;

const Container = styled.div`
  ${(props) => {
    return `
    @media screen and (max-width: ${props.theme.browserWidthSize.bigWindow}) {
      width: ${props.theme.browserWidthSize.bigWindow};
    }
    @media screen and (max-width: ${props.theme.browserWidthSize.middleWindow}) {
      width: ${props.theme.browserWidthSize.middleWindow};
    }
    @media screen and (max-width: ${props.theme.browserWidthSize.smallWindow}) {
      width: ${props.theme.browserWidthSize.smallWindow};
    }
    `;
  }}
  position: relative;
  width: 1440px;
  height: 100%;
`;

const Checkmark = styled.div`
  /* Icon/Checkmark Circle */

  position: absolute;
  width: 80px;
  height: 80px;
  left: 680px;
  top: 260px;
  img {
    position: absolute;
    left: 8.33%;
    right: 8.33%;
    top: 8.33%;
    bottom: 8.33%;
  }
`;

const CompleteMessage = styled.div`
  /* 의료인 등록이 접수되었습니다. */

  position: absolute;
  width: 341px;
  height: 36px;
  left: 552px;
  top: 364px;

  /* Heading/M/700 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  /* identical to box height, or 129% */

  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;

const CompleteDescription = styled.div`
  /* 인증 확인이 완료되면 이메일을 통해 안내드리겠습니다. 보통 1 - 2 영업일 이내에 완료됩니다. 전체 승인 과정은 다음과 같은 절차를 통해 진행됩니다. */

  position: absolute;
  width: 341px;
  height: 72px;
  left: 550px;
  top: 420px;

  /* Paragraph/M/700 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  text-align: center;

  /* Gray / 500 */

  color: #757575;
`;

const Ellipse1 = styled.div`
  /* Ellipse 240 */

  box-sizing: border-box;

  position: absolute;
  width: 22px;
  height: 22px;
  left: 464px;
  top: 568px;

  background: #ffffff;
  /* Blue/400 */

  border: 6px solid #0039ff;
  border-radius: 24px;
`;

const Ellipse2 = styled.div`
  /* Ellipse 240 */

  box-sizing: border-box;

  position: absolute;
  width: 22px;
  height: 22px;
  left: 703px;
  top: 568px;

  background: #ffffff;
  /* Blue/400 */

  border: 6px solid #0039ff;
  border-radius: 24px;
`;

const Ellipse3 = styled.div`
  /* Ellipse 240 */

  box-sizing: border-box;

  position: absolute;
  width: 22px;
  height: 22px;
  left: 959px;
  top: 568px;

  background: #ffffff;
  /* Blue/400 */

  border: 6px solid #0039ff;
  border-radius: 24px;
`;

const Line2 = styled.div`
  /* Line 2 */

  position: absolute;
  width: 218px;
  height: 0px;
  left: 485px;
  top: 579px;

  /* Gray / 200 */

  border: 1px solid #d6dde0;
`;

const Line3 = styled.div`
  position: absolute;
  width: 233px;
  height: 0px;
  left: 726px;
  top: 579px;

  /* Gray / 200 */

  border: 1px solid #d6dde0;
  transform: rotate(0.25deg);
`;

const AuthenticationCheck = styled.div`
  /* 인증 확인 */

  position: absolute;
  width: 92px;
  height: 32px;
  left: 430px;
  top: 603px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */

  /* Black */

  color: #000000;
`;

const AuthenticationDescription = styled.div`
  /* 올려주신 내용을 바탕으로 인증을 확인합니다. */

  position: absolute;
  width: 140px;
  height: 32px;
  left: 405px;
  top: 640px;

  /* Label/S/500 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  /* or 114% */

  text-align: center;

  /* Gray / 400 */

  color: #afafaf;
`;

const InformationSubmission = styled.div`
  /* 필수 정보 제출 */

  position: absolute;
  width: 141px;
  height: 32px;
  left: 644px;
  top: 603px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */

  text-align: center;

  color: #000000;
`;

const InformationDescription = styled.div`
  /* 정산에 필요한 계좌 정보 등을 이메일 안내에 따라 제출합니다. */

  position: absolute;
  width: 172px;
  height: 32px;
  left: 640px;
  top: 640px;

  /* Label/S/500 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  /* or 114% */

  /* Gray / 400 */

  color: #afafaf;
`;

const Qualificaion = styled.div`
  /* 해석인 자격 획득 */

  position: absolute;
  width: 160px;
  height: 32px;
  left: 887px;
  top: 603px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */

  text-align: center;

  color: #000000;
`;

const QualificationDescription = styled.div`
  /* 준비가 완료되면 해석인으로 활동을 시작할 수 있습니다. */

  position: absolute;
  width: 156px;
  height: 32px;
  left: 888px;
  top: 640px;

  /* Label/S/500 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  /* or 114% */

  /* Gray / 400 */

  color: #afafaf;
`;

const HomeButton = styled.button`
  /* Button/M/Tertiary/Default */

  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 10px;

  position: absolute;
  width: 336px;
  height: 44px;
  left: 552px;
  top: 732px;

  /* White */

  background: #ffffff;
  /* Blue/100 */

  border: 1.5px solid #d4e2fc;
  border-radius: 32px;
`;

const ButtonLabel = styled.div`
  /* Label */

  width: 42px;
  height: 20px;

  /* Label/M/500 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */

  text-align: center;

  /* Blue/400 */

  color: #0039ff;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
