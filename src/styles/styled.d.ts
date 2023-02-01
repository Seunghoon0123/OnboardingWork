import 'styled-components';

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
    leftPosition: {
      bigWindow: string;
      middleWindow: string;
      smallWindow: string;
    };
    flexSet: {
      center: string;
      spaceBetween: string;
      spaceAround: string;
    };
  }
}
