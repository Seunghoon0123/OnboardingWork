import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const headerHeight = '60px';
const widthBigWindow = '1040px';
const widthMiddleWindow = '702px';
const widthSmallWindow = '343px';
const TitleBigWindowLayout = `
  width: 100px;
  height: 27.66px;
`;
const TitleSmallWindowLayout = `
  width: 57.91px;
  height: 15.92px;
`;
const IconGroupLayout = `
  width: 104px; 
  height: 36px;
`;
const MenuFrameLayout = `
  padding: 8px 12px;
  gap: 8px;
  width: 46px;
`;

const Header = () => {
  return (
    <Background>
      <Container>
        <Title>
          <Image className="titleImg" src="/ontolLogo.svg" alt="Ontol" width={100} height={27.66} />
        </Title>
        <HeaderRight>
          <BellIcon>
            <Image className="BellIconImg" src="/Bell.svg" alt="Alarm" width={17.96} height={19.51} />
          </BellIcon>
          <MenuFrame>
            <MenuBtn>
              <Image className="MenuBtnImg" src="/Menu.svg" alt="Ontol" width={15} height={10} />
            </MenuBtn>
            <MyAccount>
              <Image className="MenuBtnImh" src="/Human.svg" alt="Ontol" width={16.67} height={16.67} />
            </MyAccount>
          </MenuFrame>
        </HeaderRight>
      </Container>
    </Background>
  );
};

export default Header;

const Background = styled.header`
  ${(props) => props.theme.flexRowSet.center}
  width: 100%;
  height: ${headerHeight};

  /* Background */

  background: #fcfcfc;
`;

const Container = styled.div`
  ${(props) =>
    `
      @media (min-width: ${props.theme.browserWidthSize.bigWindow}) {
        width : ${widthBigWindow};
      }
      @media (min-width: ${props.theme.browserWidthSize.middleWindow}) and (max-width: ${props.theme.browserWidthSize.bigWindow}) {
        width : ${widthMiddleWindow};
      }
      @media (max-width: ${props.theme.browserWidthSize.middleWindow}) {
        width : ${widthSmallWindow};
      }
    }
    `}
  /* Auto layout */
  ${(props) => props.theme.flexRowSet.spaceBetween}
`;
const Title = styled.div`
  ${(props) =>
    `
      @media (min-width: ${props.theme.browserWidthSize.bigWindow}) {
        img{
          ${TitleBigWindowLayout}
        }
      }
      @media (min-width: ${props.theme.browserWidthSize.middleWindow}) and (max-width: ${props.theme.browserWidthSize.bigWindow}) {
        img{
          ${TitleSmallWindowLayout}
        }
      }
      @media (max-width: ${props.theme.browserWidthSize.middleWindow}) {
        img{
          ${TitleSmallWindowLayout}
        }
      }
    }
    `}
`;

const HeaderRight = styled.div`
  ${(props) => props.theme.flexRowSet.spaceBetween}

  /* Group 12 */
  ${IconGroupLayout}
`;
const BellIcon = styled.div`
  /* Icon/Alert */
  ${(props) => props.theme.flexRowSet.center}
`;
const MenuFrame = styled.div`
  ${(props) => props.theme.flexRowSet.spaceBetween}

  /* Auto layout */
  ${MenuFrameLayout}
  
  /* Background */

  background: #fcfcfc;
  /* Gray/100 */

  border: 1px solid #e9edef;
  border-radius: 80px;
`;

const MenuBtn = styled.div`
  ${(props) => props.theme.flexRowSet.center}/* Systems / menu */

  /* Inside auto layout */
`;

const MyAccount = styled.div`
  ${(props) => props.theme.flexRowSet.center}/* Icon/Icon/Person Circle */
`;
