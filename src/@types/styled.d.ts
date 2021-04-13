import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    metrics: {
      borderRadius: string;
    };
    colors: {
      green100: string;
      green200: string;
      blue: string;
      black: string;
      gray100: string;
      gray200: string;
    };
  }
}
