import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}
    body {
        font-family: 'JetBrains Mono', monospace;
        background-color: ${({ theme }) => theme.colors.veryDarkGrey};
        color:${({ theme }) => theme.colors.almostWhite};
    }
`;
