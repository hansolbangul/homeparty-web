/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react"
import { margin_top_20, padding_btn } from "../css/padding";
import { flex_center, width_100 } from "../css/style"
import { mq } from "../global";

export const KakaoButton = () => {

    const kakaoTalk = () => {
        window.location.href = 'https://open.kakao.com/o/sbGNT7Xe'
    }

    return (
        <div className="set" id="observer"
        css={{
            ...flex_center,
            ...padding_btn,
            width:' 40%',
            backgroundColor: '#F7E113',
            textAlign: 'center',
            borderRadius: '14px',
            ...margin_top_20,
            color: 'black',
            [mq[1]]: {
                width: '90%'  
            } 
        }} onClick={kakaoTalk}>카카오톡으로 전송</div>
    )
}