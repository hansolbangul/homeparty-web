/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { column_align_center } from "../css/style";
import { CalendarCircle } from "./CalendarCircle";

export const Day = ({item, type, children, nonDay, onClick}) => {
        
    return <div onClick={onClick} css={{
        width: 'calc((100% - 36px) / 7)',
        aspectRatio: '1/1',
        justifyContent: 'space-evenly',
        ...column_align_center
    }}>
        {type ? <div></div> : <>
            <CalendarCircle check={item}/>
            <div css={{
                color: nonDay.includes(children) ? 'blue' : (children + 2) % 7 ? '#fff' : 'red'
            }}>{children}</div>
        </>}
    </div>
}