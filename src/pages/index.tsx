import Header from '@/components/Header';
import Footer from '@/components/Footer';

import styled from 'styled-components';
import BasicInfoInput from '@/components/BasicInfoInput';
import CertificateFileInput from '@/components/CertificateFileInput';
import AgreeCheckBox from '@/components/AgreeCheckBox';
import Image from 'next/image';

const Home = () => {
  return (
    <BackGround>
      <Header />
      <Container>
        <RegistTitle>의료인 등록</RegistTitle>
        <RegistTitleDescription>
          아래 양식을 통해 의료인 신분을 인증하여 해석인으로 참여 신청하실 수 있습니다. 해석이 가능한 의과 대학생(본과), 간호사 등, 의료 계통에 소속되어 있는
          분들도 함께 참여하실 수 있습니다.
        </RegistTitleDescription>
        <BasicInfo>기본 정보</BasicInfo>
        <BasicInfoInput />
        <RegistCertificate>증명서 등록</RegistCertificate>
        <RegistCertificateDescription>
          면허증, 사원증 등 의료인 신분을 증명할 수 있는 첨부자료를 올려주세요. 기본 정보에 입력한 내용과 다를 경우 의료인 등록이 거절될 수 있습니다.
        </RegistCertificateDescription>
        <CertificateFileInput />
        <AgreeCondition>약관 동의</AgreeCondition>
        <AgreeConditionDescription>제공해주신 정보는 서비스 이용 및 신분 인증 목적을 위해서만 사용됩니다.</AgreeConditionDescription>
        <AgreeCheckBox />
        <BackArrow>
          <ArrowIcon>
            <Image src="/BackArrow.svg" width={10.67} height={5.83} alt="v" />
          </ArrowIcon>
          <Label />
        </BackArrow>
        <NextButton>
          <ButtonLabel>다음</ButtonLabel>
          <NextArrow>
            <Image src="/NextArrow.svg" width={10.67} height={5.83} alt="v" />
          </NextArrow>
        </NextButton>
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

const RegistTitle = styled.div`
  /* 의료인 등록 */

  position: absolute;
  height: 40px;
  left: 464px;
  top: 124px;

  /* Heading/M/700 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 125% */

  display: flex;
  align-items: center;

  /* Gray / 700 */

  color: #333333;
`;

const RegistTitleDescription = styled.div`
  ${(props) => {
    return `
    @media screen and (min-width: 1440px) {
      width: ${props.theme.contentWidthSize.bigWindow};
    }
    `;
  }}
  position: absolute;
  /* width: 512px; */
  height: 72px;
  left: 463px;
  top: 174px;

  /* Paragraph/M/400 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  /* Gray / 600 */

  color: #545454;
`;

const BasicInfo = styled.div`
  /* 기본 정보 */

  position: absolute;
  height: 24px;
  left: 466px;
  top: 311px;

  /* Label/L/700 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  display: flex;
  align-items: center;

  /* Gray / 700 */

  color: #333333;
`;

const RegistCertificate = styled.div`
  /* 증명서 등록 */

  position: absolute;
  height: 24px;
  left: 465px;
  top: 713px;

  /* Label/L/700 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  display: flex;
  align-items: center;

  /* Gray / 700 */

  color: #333333;
`;

const RegistCertificateDescription = styled.div`
  /* 면허증, 사원증 등 의료인 신분을 증명할 수 있는 첨부자료를 올려주세요. 기본 정보에 입력한 내용과 다를 경우 의료인 등록이 거절될 수 있습니다. */

  position: absolute;
  width: 512px;
  height: 40px;
  left: 464px;
  top: 745px;

  /* Paragraph/S/400 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */

  display: flex;
  align-items: center;

  /* Gray / 600 */

  color: #545454;
`;

const AgreeCondition = styled.div`
  /* 약관 동의 */

  position: absolute;
  height: 24px;
  left: 465px;
  top: 993px;

  /* Label/L/700 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  display: flex;
  align-items: center;

  /* Gray / 700 */

  color: #333333;
`;

const AgreeConditionDescription = styled.div`
  /* 제공해주신 정보는 서비스 이용 및 신분 인증 목적을 위해서만 사용됩니다. */

  position: absolute;
  height: 20px;
  left: calc(50% - 399px / 2 - 56.5px);
  top: 1025px;

  /* Paragraph/S/400 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  display: flex;
  align-items: center;

  /* Gray / 600 */

  color: #545454;
`;

const BackArrow = styled.div`
  /* TextButton/Tertiary/IconReading/Black */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px;
  gap: 4px;

  position: absolute;
  width: 82px;
  height: 22px;
  left: 464px;
  top: 1192px;
`;

const ArrowIcon = styled.div`
  /* Icon/Arrow */

  width: 14px;
  height: 14px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  img {
    /* Shape */

    position: absolute;
    left: 12.5%;
    right: 12.5%;
    top: 16.68%;
    bottom: 16.68%;

    /* Default/Gray/700 */
  }
`;

const Label = styled.div`
  /* Label */

  width: 55px;
  height: 18px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height, or 129% */

  text-align: center;
  letter-spacing: -0.02em;
  text-decoration-line: underline;

  /* Gray / 700 */

  color: #333333;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const NextButton = styled.button`
  /* Button/M/Primary/IconTrailling */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 4px;

  position: absolute;
  width: 160px;
  height: 44px;
  left: 816px;
  top: 1181px;

  /* Blue/400 */

  background: #0039ff;
  border: 0 none;
  border-radius: 32px;
`;

const ButtonLabel = styled.div`
  /* Label */

  width: 28px;
  height: 20px;

  /* Label/M/500 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */

  text-align: center;

  /* White */

  color: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const NextArrow = styled.div`
  /* Icon/Chevron.Right */

  width: 12px;
  height: 12px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;

  img {
    /* Shape */

    position: absolute;
    left: 55.38%;
    right: 29.17%;
    top: 39.67%;
    bottom: 16.67%;

    /* White */
  }
`;
