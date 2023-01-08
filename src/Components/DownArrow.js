/** @jsxImportSource @emotion/react */
import React, { useRef } from "react";
import copy from '../assets/image/copy.png'
import { mq } from "../global";
import arrow from '../assets/image/down-arrow.png'
import { downAni } from "../css/animation";

const imageSize = {
    default: '50px'
}

export const DownArrow = ({onClick, size = 'default'}) => {
    return (
        <img onClick={onClick} className="set" id="scroll" css={{
            width: imageSize[size],
            height: imageSize[size],
            marginTop: imageSize[size],
            animation: downAni(2),
            cursor: 'pointer',
            [mq[1]]: {
                display: 'none'
            }
        }} src={arrow} alt="arrow" 
        />
    )
}