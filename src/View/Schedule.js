/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Calendar } from "../Components/Calendar";
import { Form } from "../Components/Form";
import { KakaoButton } from "../Components/KakaoButton";
import { font5 } from "../css/font";
import { margin_bottom_40 } from "../css/padding";
import { contain } from "../css/style";

export const Schedule = () => {
    const [item, setItem] = useState([]);

    return (
        <div css={{
            ...contain
        }}>
            <h2 className="set" id="observer" css={{
                ...font5,
                ...margin_bottom_40
            }}>🗓  2월 일정 고르기  🗓</h2>
            <Calendar setItem={setItem}/>
            <Form wd="40%" top="30px" size='large' >
                나는 {item.sort((a, b) => a - b).map(value => `${value}일 `)}에 갈게!
            </Form>
            <KakaoButton />
        </div>
    )
}