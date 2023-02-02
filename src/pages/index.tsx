import Header from '@/components/Header';
import Footer from '@/components/Footer';

import styled from 'styled-components';
import BasicInfoInput from '@/components/BasicInfoInput';
import CertificateFileInput from '@/components/CertificateFileInput';
import AgreeCheckBox from '@/components/AgreeCheckBox';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { basicInfoType } from '@/types/variableTypes';

const Home = () => {
  const [basicInfo, setBasicInfo] = useState<basicInfoType>({
    userName: '',
    professionalGroup: '',
    belong: '',
    doctorType: '',
    doctorMajor: '',
    doctorPosition: '',
    studentGrade: '',
    nurseType: '',
    yearsOfService: '',
    otherJob: '',
  });
  const [certificateFile, setCertificateFile] = useState<File>();
  const [isInputComplete, setIsInputComplete] = useState(false);
  const [isAgree, setIsAgree] = useState(false);

  useEffect(() => {
    let isFull = true;
    console.log('basicInfo : ', basicInfo);
    Object.values(basicInfo).forEach((value) => {
      isFull = isFull && !!value;
    });

    console.log();
    isFull = isFull && !!certificateFile;
    setIsInputComplete(isFull);
  }, [basicInfo, certificateFile]);

  const goNext = () => {
    if (isInputComplete && isAgree) alert('넘어가~');
    else if (!isInputComplete) alert('입력란을 모두 채워주세요.');
    else if (!isAgree) alert('약관에 동의해주세요.');
  };

  return (
    <BackGround>
      <div className="upperContainer">
        <Header />
        <Container>
          <RegistTitle>의료인 등록</RegistTitle>
          <RegistTitleDescription>
            아래 양식을 통해 의료인 신분을 인증하여 해석인으로 참여 신청하실 수 있습니다. 해석이 가능한 의과 대학생(본과), 간호사 등, 의료 계통에 소속되어 있는
            분들도 함께 참여하실 수 있습니다.
          </RegistTitleDescription>
          <BasicInfo>기본 정보</BasicInfo>
          <BasicInfoInput setBasicInfo={setBasicInfo} />
          <RegistCertificate>증명서 등록</RegistCertificate>
          <RegistCertificateDescription>
            면허증, 사원증 등 의료인 신분을 증명할 수 있는 첨부자료를 올려주세요. 기본 정보에 입력한 내용과 다를 경우 의료인 등록이 거절될 수 있습니다.
          </RegistCertificateDescription>
          <CertificateFileInput setCertificateFile={setCertificateFile} />
          <AgreeCondition>약관 동의</AgreeCondition>
          <AgreeConditionDescription>제공해주신 정보는 서비스 이용 및 신분 인증 목적을 위해서만 사용됩니다.</AgreeConditionDescription>
          <AgreeCheckBox isAgree={isAgree} setIsAgree={setIsAgree} />
          <StepButtonContainer>
            <BackArrow>
              <ArrowIcon>
                <Image src="/BackArrow.svg" width={10.67} height={5.83} alt="v" />
              </ArrowIcon>
              <Label />
            </BackArrow>
            <NextButton onClick={goNext}>
              <ButtonLabel>다음</ButtonLabel>
              <NextArrow>
                <Image src="/NextArrow.svg" width={10.67} height={5.83} alt="v" />
              </NextArrow>
            </NextButton>
          </StepButtonContainer>
        </Container>
      </div>
      <Footer />
    </BackGround>
  );
};

export default Home;

const BackGround = styled.div`
  ${(props) =>
    props.theme.flexCustomSet({
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: '',
    })}

  position: relative;
  width: 100vw;
  height: 100vh;

  .upperContainer {
    ${(props) =>
      props.theme.flexCustomSet({
        flexDirection: 'column',
        justifyContent: '',
        alignItems: 'center',
      })}
  }

  button {
    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;

const Container = styled.div`
  ${(props) =>
    `
      @media (min-width: ${props.theme.browserWidthSize.bigWindow}) {
        width: ${props.theme.contentWidthSize.bigWindow};
      }
      @media (min-width: ${props.theme.browserWidthSize.middleWindow}) and (max-width: ${props.theme.browserWidthSize.bigWindow}) {
        width: ${props.theme.contentWidthSize.middleWindow};
      }
      @media (max-width: ${props.theme.browserWidthSize.middleWindow}) {
        width: ${props.theme.contentWidthSize.smallWindow};
    }
    `}
  position: relative;
`;

const RegistTitle = styled.div`
  /* 의료인 등록 */
  ${(props) =>
    `
      @media (min-width: ${props.theme.browserWidthSize.bigWindow}) {
        margin-top: 64px;
      }
      @media (min-width: ${props.theme.browserWidthSize.middleWindow}) and (max-width: ${props.theme.browserWidthSize.bigWindow}) {
        margin-top: 32px;
      }
      @media (max-width: ${props.theme.browserWidthSize.middleWindow}) {
        margin-top: 32px;
    }
    `}

  /* Heading/M/700 */

  ${(props) => props.theme.fontSet.pretendard}
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
  ${(props) =>
    `
      @media (min-width: ${props.theme.browserWidthSize.bigWindow}) {
        margin-top: 10px;
      }
      @media (min-width: ${props.theme.browserWidthSize.middleWindow}) and (max-width: ${props.theme.browserWidthSize.bigWindow}) {
        display: none;
        margin-top: 48px;
      }
      @media (max-width: ${props.theme.browserWidthSize.middleWindow}) {
        display: none;
        margin-top: 32px;
    }
    `}

  /* Paragraph/M/400 */

  ${(props) => props.theme.fontSet.pretendard}
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  /* Gray / 600 */

  color: #545454;
`;

const BasicInfo = styled.div`
  ${(props) =>
    `
      @media (min-width: ${props.theme.browserWidthSize.bigWindow}) {
        margin-top: 65px;
        margin-bottom: 29px;
      }
      @media (min-width: ${props.theme.browserWidthSize.middleWindow}) and (max-width: ${props.theme.browserWidthSize.bigWindow}) {
        margin-top: 48px;
        margin-bottom: 20px;
      }
      @media (max-width: ${props.theme.browserWidthSize.middleWindow}) {
        margin-top: 32px;
        margin-bottom: 16px;
    }
    `}
  /* 기본 정보 */

  /* Label/L/700 */

  ${(props) => props.theme.fontSet.pretendard}
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
  ${(props) =>
    `
      @media (min-width: ${props.theme.browserWidthSize.bigWindow}) {
        margin-top: 93px;
      }
      @media (min-width: ${props.theme.browserWidthSize.middleWindow}) and (max-width: ${props.theme.browserWidthSize.bigWindow}) {
        margin-top: 48px;
      }
      @media (max-width: ${props.theme.browserWidthSize.middleWindow}) {
        margin-top: 48px;
    }
    `}
  /* 증명서 등록 */

  /* Label/L/700 */

  ${(props) => props.theme.fontSet.pretendard}
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

  /* top: 745px; */
  margin-top: 8px;
  margin-bottom: 24px;

  /* Paragraph/S/400 */
  ${(props) => props.theme.fontSet.pretendard}
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

  margin-top: 48px;

  /* Label/L/700 */

  ${(props) => props.theme.fontSet.pretendard}
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

  margin-top: 8px;
  margin-bottom: 24px;

  /* Paragraph/S/400 */

  ${(props) => props.theme.fontSet.pretendard}
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  display: flex;
  align-items: center;

  /* Gray / 600 */

  color: #545454;
`;

const StepButtonContainer = styled.div`
  ${(props) => props.theme.flexRowSet.spaceBetween}
  ${(props) =>
    `
      @media (min-width: ${props.theme.browserWidthSize.bigWindow}) {
        margin-bottom: 213px;
      }
      @media (min-width: ${props.theme.browserWidthSize.middleWindow}) and (max-width: ${props.theme.browserWidthSize.bigWindow}) {
        margin-bottom: 215px;
      }
      @media (max-width: ${props.theme.browserWidthSize.middleWindow}) {
        margin-bottom: 247px;
    }
    `}
  margin-top:64px;
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

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
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
  ${(props) => props.theme.flexRowSet.center}

  /* Auto layout */
  padding: 12px 58px;
  gap: 4px;

  /* top: 1181px; */

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

  ${(props) => props.theme.fontSet.pretendard}
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */

  /* White */

  color: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const NextArrow = styled.div`
  /* Icon/Chevron.Right */
  ${(props) => props.theme.flexRowSet.center}
  padding-bottom:2px;
`;
