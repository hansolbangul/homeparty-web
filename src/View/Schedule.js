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
            }}>π  2μ μΌμ  κ³ λ₯΄κΈ°  π</h2>
            <Calendar setItem={setItem}/>
            <Form wd="40%" top="30px" size='large' >
                λλ {item.sort((a, b) => a - b).map(value => `${value}μΌ `)}μ κ°κ²!
            </Form>
            <KakaoButton />
        </div>
    )
}