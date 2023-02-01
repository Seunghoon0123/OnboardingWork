import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const headerHeight = '60px';
const headerWidth = '1040px';
const TitleLayout = `
  width: 100px;
  height: 27.66px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${headerHeight};

  /* Background */

  /* background: #fcfcfc; */
  background: gray;
`;

const Container = styled.div`
  /* Header */
  width: ${headerWidth};

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  ${TitleLayout}
  flex: none;
`;

const HeaderRight = styled.div`
  ${(props) => props.theme.flexSet.spaceBetween}

  /* Group 12 */
  ${IconGroupLayout}
`;
const BellIcon = styled.div`
  /* Icon/Alert */
  ${(props) => props.theme.flexSet.center}
`;
const MenuFrame = styled.div`
  ${(props) => props.theme.flexSet.spaceBetween}

  /* Auto layout */
  ${MenuFrameLayout}
  
  /* Background */

  background: #fcfcfc;
  /* Gray/100 */

  border: 1px solid #e9edef;
  border-radius: 80px;
`;

const MenuBtn = styled.div`
  ${(props) => props.theme.flexSet.center}/* Systems / menu */

  /* Inside auto layout */
`;

const MyAccount = styled.div`
  ${(props) => props.theme.flexSet.center}/* Icon/Icon/Person Circle */
`;
