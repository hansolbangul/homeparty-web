/** @jsxImportSource @emotion/react */
import React from "react";
import { font5 } from "../css/font";
import doll from '../assets/image/doll.png'
import { mq } from "../global";
import { contain } from "../css/style";
import { margin_bottom_40 } from "../css/padding";

export const Gift = () => {

    return (
        <div css={{
            ...contain
        }}>
            <h2 className="set" id="observer" css={{
                ...font5,
                ...margin_bottom_40
            }}>🎁  선착순 선물  🎁</h2>
            <img className="set" id="observer" css={{
                width: '900px',
                borderRadius: '12px',
                aspectRatio: '1/1',
                [mq[1]]: {
                    width: '300px',
                    height: '300px'
                }
            }} src={doll} alt='doll' />
        </div>
    )
}