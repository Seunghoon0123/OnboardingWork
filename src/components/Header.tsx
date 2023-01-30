import React from 'react';
import styled from 'styled-components';

interface Props {
  name?: string;
}

const Header = ({ name }: Props) => {
  return (
    <Container>
      <Title>Ontol</Title>
      <Menu>
        <RingIcon>종모양 아이콘</RingIcon>
        <Collection>
          <div>줄모양 메뉴</div>
          <div>동그란 사람</div>
        </Collection>
      </Menu>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 200px;
  gap: 449px;

  position: absolute;
  width: 1440px;
  height: 60px;
  left: 0px;
  top: 0px;

  background-color: #fcfcfc;
`;
const Title = styled.div``;
const Menu = styled.div`
  display: flex;
`;
const RingIcon = styled.div``;
const Collection = styled.div`
  display: flex;
`;
