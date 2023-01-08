import { css } from "@emotion/react"

export const darkTheme = {
    color: '#fff',
    background: 'black'
}

export const lightTheme = {
    color: 'black',
    background: 'white'
}

export const div = css`
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const justifyContent = css`
    justify-content: center;
`