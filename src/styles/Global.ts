import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;

        font-family: 'Inter', sans-serif;
    }

    body{
        position: relative;

        height: 100vh;
    }


    :root{
        --brand100: #27ae60;
        --brand100-01: rgba(39, 174, 96, 0.1);
        --brand200: #279060;
        --brandSecondary100: #eb5757;

        --grey000: #f5f5f5;
        --grey100: #e0e0e0;
        --grey300: #828282;
        --grey600: #333333;

        --negative100: #e60000;
        --warning100: #ffcd07;
        --sucess100: #168821;
        --information100: #155bcb;

        --font-size-1: 1.625rem;
        --font-size-2: 1.375rem;
        --font-size-3: 1.125rem;
        --font-size-4: 1rem;
        --font-size-5: 0.875rem;
        --font-size-6: 0.75rem;

        --font-weight-100: 100 ;
        --font-weight-200: 200 ;
        --font-weight-300: 300 ;
        --font-weight-400: 400 ;
        --font-weight-500: 500 ;
        --font-weight-600: 600 ;
        --font-weight-700: 700 ;
        --font-weight-800: 800 ;
        --font-weight-900: 900 ;

        --pointer: pointer;

        --anim-duration: 0.4s;
        --anim-type: ease-in-out;
    }
`;
