import { mq } from "../global"

export const flex = {
    display: 'flex'
}

export const flex_align_center = {
    ...flex,
    alignItems: 'center'
}

export const flex_justify_center = {
    ...flex,
    justifyContent: 'center'
}

export const flex_center = {
    ...flex_align_center,
    ...flex_justify_center
}

export const column = {
    ...flex,
    flexDirection: 'column',
}

export const column_align_center = {
    ...column,
    alignItems: 'center'
}

export const column_justify_center = {
    ...column,
    justifyContent: 'center',
}

export const column_center = {
    ...column_align_center,
    ...column_justify_center
}

export const width_100 = {
    width: '100%'
}

export const width_100vw = {
    width: '100vw'
}

export const contain = {
    ...column_center,
    ...width_100,
    height: '100vh',
    [mq[1]]: {
        marginTop: '40px',
        height: 'auto',
    }
}
