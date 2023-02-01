import 'styled-components';

interface flexCustomSetParmas {
  flexDirection: string;
  justifyContent: string;
  alignItems: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      orange: string;
    };
    contentWidthSize: {
      bigWindow: string;
      middleWindow: string;
      smallWindow: string;
    };
    browserWidthSize: {
      bigWindow: string;
      middleWindow: string;
      smallWindow: string;
    };
    flexRowSet: {
      center: string;
      spaceBetween: string;
      spaceAround: string;
    };
    flexCustomSet: ({ flexDirection, justifyContent, alignItems }: flexCustomSetParmas) => string;

    fontSet: {
      pretendard: string;
    };
  }
}
