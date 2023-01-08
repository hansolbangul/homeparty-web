import React from "react";
import { Global, css } from "@emotion/react";

const breakpoints = [400, 700, 992, 1200];
export const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`) 

const style = (theme) => css`
    @font-face {
        font-family: 'BMHANNAPro';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_seven@1.0/BMHANNAPro.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'KOTRAHOPE';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRAHOPE.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* font-family: 'BMHANNAPro'; */
        font-family: 'KOTRAHOPE';
    }

    body {
        color: ${theme.color};
        background-color: ${theme.background};
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */

        ::-webkit-scrollbar {
            display: none;
        }
    }

    @keyframes infinityDown {
        0% {
            transform: translateY(0px);
        }

        60% {
            transform: translateY(20px);
        }

        100% {
            transform: translateY(0px);
        }
    }

    @keyframes upAni {
        0% {
            transform: translateY(300px);
        }

        100% {
            transform: translateY(0px);
        }
    }

    .height {
        height: 100vh;
        height: -webkit-fill-available;
        height: fill-available;
    }

    // 애니메이션
    .set {
        opacity: 0;
    }
    
    .up {
        opacity: 1;
        animation: upAni .8s;
    }

    .downDefault {
        transform: translateY(-300px);
        opacity: 0;
        transition: .8s;
    }
    
    .down {
        transform: translateY(0px);
        opacity: 1;
    }
`

export const GlobalStyle = () => {
    return <Global styles={style} />
}
