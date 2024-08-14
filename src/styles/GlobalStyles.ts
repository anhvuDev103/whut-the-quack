import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Space Grotesk', sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-size: 1.6rem;

    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

* {
    &::-webkit-scrollbar {
        width: 1em;
    }
 
    &::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.palette.common.black10};
        border: 1px solid ${({ theme }) => theme.palette.common.black10};
    }
 
    &::-webkit-scrollbar-thumb {
        border: 2px solid ${({ theme }) => theme.palette.border.main};
        background-color: ${({ theme }) => theme.palette.common.white};
        border-radius: 6px;
        box-shadow: inset 0px -4px 0px 0px ${({ theme }) => theme.palette.common.muted};

        &:hover {
            background-color: ${({ theme }) => theme.palette.common.white60};
            cursor: grab;
        }

        &:active {
            cursor: grabbing;
        }
    }
}

html {
    font-size: 62.5%;
    height: 100vh;
}

body,
#root {
    height: 100%;
}

body {
  background-color: ${({ theme }) => theme.palette.background.default};
}

.Toastify__toast {
    border: 2px solid ${({ theme }) => theme.palette.border.main};
    box-shadow: inset 0px -4px 0px 0px ${({ theme }) => theme.palette.common.muted};
    border-radius: 8px;
    margin-bottom: 0;
}

.Toastify__toast-body {
    align-items: flex-start;
}

.Toastify__toast-icon svg {
    fill: ${({ theme }) => theme.palette.common.white};
    margin-top: 4px;
}

.Toastify__close-button {
    box-shadow: unset;
    display: flex;
}

.Toastify__close-button svg {
    fill: ${({ theme }) => theme.palette.common.black};
    width: 16px;
}

.Toastify__toast--success {
    background-color: ${({ theme }) => theme.palette.success.main};
    color: ${({ theme }) => theme.palette.success.contrast};;
}

.Toastify__toast--error {
    background-color: ${({ theme }) => theme.palette.danger.main};
    color: ${({ theme }) => theme.palette.success.contrast};;
}

.clickable {
    &:hover {
        text-decoration: underline;
        text-decoration-style: dashed;
        text-underline-offset: 2px;
        text-decoration-thickness: 1px;
    }
}
`;

export default GlobalStyle;
