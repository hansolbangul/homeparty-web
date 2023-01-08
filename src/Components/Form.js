/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useRef } from "react";
import copy from '../assets/image/copy.png'
import { font3 } from "../css/font";
import { flex_align_center } from "../css/style";
import { copyText } from "../export/function";
import { mq } from "../global";
import { CopyIcon } from "./CopyIcon";

const paddingSize = {
    default: '8px 16px',
    large: '12px 24px',
    small: '6px 12px'
}

export const Form = ({size = 'default', wd = '100%', top = '0px', children}) => {
    const ref = useRef();

    return (
        <div className="set" id="observer"
        css={{
            ...flex_align_center,
            ...font3,
            padding: paddingSize[size],
            width: wd,
            marginTop: top,
            borderRadius: '14px',
            backgroundColor: '#333333',
            justifyContent: 'space-between',
            [mq[1]]: {
                width: '90%'  
            } 
        }} >
            <span ref={ref}>{children}</span>
            <CopyIcon size="input" onClick={() => copyText(ref.current.innerText)}/>
        </div>
    )
}