import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    black: '#1e1f1d',
    white: '#ffffff',
    orange: '#eb7952',
  },
  contentWidthSize: {
    bigWindow: '512px',
    middleWindow: '524px',
    smallWindow: '343px',
  },
  browserWidthSize: {
    bigWindow: '1440px',
    middleWindow: '768px',
    smallWindow: '375px',
  },
  flexRowSet: {
    center: `
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    spaceBetween: `
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    spaceAround: `
      display: flex;
      justify-content: space-around;
      align-items: center;
    `,
    stretch: `
      display: flex;
      justify-content: space-around;
      align-items: center;
    `,
  },
  flexCustomSet: ({ flexDirection, justifyContent, alignItems }) => `
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `,
  fontSet: {
    pretendard: `
    font-family: 'Pretendard';
    font-style: normal;
    `,
  },
};
