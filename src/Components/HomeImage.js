/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import home from '../assets/image/home.gif'
import { mq } from "../global";

const imageSize = {
    pc: '400px',
    mobile: '350px',
}

export const HomeImage = () => {
    const max = (type) => {
        return ({
            maxWidth: imageSize[type],
            maxHeight: imageSize[type]
        })
    }

    return (
        <img css={{
            ...max('pc'),
            [mq[1]]: {
                ...max('mobile'),
            }
        }} src={home} alt='home' />
    )
}