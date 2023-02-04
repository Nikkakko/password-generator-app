// styled.d.ts
import 'styled-components';

interface IPalette {
  main: string;
  contrastText: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      darkGrey: string;
      veryDarkGrey: string;
      grey: string;
      almostWhite: string;
      neonGreen: string;
      red: string;
      orange: string;
      yellow: string;
    };

    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };

    fontWeights: {
      regular: number;
      medium: number;
      bold: number;
    };
  }
}
