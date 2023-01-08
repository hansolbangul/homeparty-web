/** @jsxImportSource @emotion/react */
import React, { useRef } from "react";
import copy from '../assets/image/copy.png'
import { mq } from "../global";
import arrow from '../assets/image/down-arrow.png'
import { font3 } from "../css/font";

const imageSize = {
    default: font3.fontSize,
    input: '30px'
}

export const CopyIcon = ({onClick, size = 'default'}) => {
    return (
        <img onClick={onClick} css={{
            width: imageSize[size],
            height: imageSize[size],
            cursor: 'pointer'
        }} src={copy} alt='copy' />
    )
}