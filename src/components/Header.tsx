import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

interface Props {
  name?: string;
}

const Header = ({ name }: Props) => {
  return (
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
  );
};

export default Header;

const Container = styled.header`
  /* Header */
  position: absolute;
  top: 0px;
  width: 1040px;
  height: 60px;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 200px;
  gap: 449px;

  /* Background */

  background: #fcfcfc;
`;
const Title = styled.div`
  width: 100px;
  height: 27.66px;

  flex: none;
  order: 0;
  flex-grow: 0;

  .titleImg {
    left: 0.12%;
    right: 0.03%;
    top: 0.44%;
    bottom: 0.03%;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Group 12 */
  width: 104px;
  height: 36px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;
const BellIcon = styled.div`
  /* Icon/Alert */

  width: 24px;
  height: 24px;
  left: 1136px;
  top: 18px;

  .BellIconImg {
    left: 12.6%;
    right: 12.56%;
    top: 8.32%;
    bottom: 10.41%;
  }
`;
const MenuFrame = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  gap: 8px;

  /* Background */

  background: #fcfcfc;
  /* Gray/100 */

  border: 1px solid #e9edef;
  border-radius: 80px;
`;

const MenuBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* Systems / menu */

  width: 20px;
  height: 20px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  .MenuBtnImg {
    /* Vector */

    left: 12.5%;
    right: 12.5%;
    top: 25%;
    bottom: 25%;

    /* Gray / 700 */
  }
`;

const MyAccount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* Icon/Icon/Person Circle */

  width: 20px;
  height: 20px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;

  .MyAccountImg {
    /* Shape */

    left: 8.33%;
    right: 8.33%;
    top: 8.33%;
    bottom: 8.33%;

    /* Gray / 700 */
  }
`;
