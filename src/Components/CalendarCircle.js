/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";

const defaultCircle = {
    width: '66%',
    aspectRatio: '1/1',
    borderRadius: '50%',
    position: 'absolute',
}

const defaultSet = [
    {
        top: 0,
        left: 0,
    },
    {
        top: 0,
        right: 0,
    },
    {
        bottom: 0,
        left: 0,
    },
    {
        bottom: 0,
        right: 0,
    }
]

const defaultColor = [
    '#178FCB',
    '#DA5C84',
    '#00B635',
    '#D7B22C'
]

export const CalendarCircle = ({circle, setCircle, check}) => {

    return (
        <div css={{
            width: '50%',
            aspectRatio: '1/1',
            position: 'relative',
            cursor: 'pointer'
        }}>
            {[0, 1, 2, 3].map((item, index) => {
                return <div  key={index} css={{
                    ...defaultCircle,
                    ...defaultSet[index],
                    // backgroundColor: item.check ? defaultColor[index] : '#333333',
                    backgroundColor: check ? defaultColor[index] : '#333333',
                }}></div>
            })}
        </div>
    )
}