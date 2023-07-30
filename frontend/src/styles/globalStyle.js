import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        
    }

    :root{
        --primary-color: #5a189a;
        --color-purple #c77dff; //indicator color
        --color-accent #C3BAF7;
        --color-sub1 #b5179e; //income
        --color-sub2 #61a5c2; //expense
        --color-sub3 #9d4edd; //balance
    }

    body{
        font-family: 'Raleway', sans-serif;
        background-color: pink;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        overflow: hideen;
        color: rgba(94, 84, 142, .6);
    }
    h1, h2, h3, h4, h5, h6{
        color: var(--primary-color);
    }

    .error{
        color: var(--color-sub3);
        animation: shake .5s ease-in-out;
        @keyframes shake {
            0%{
                transform: translateX(0);
            }
            25%{
                transform: translateX(10px);
            }
            50%{
                transform: translateX(-10px);
            }
            75%{
                transform: translateX(10px);
            }
            100%{
                transform: translateX(0);
            }
        }
    }
`;