/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { font10, font8 } from "../css/font";
import { mq } from "../global";
import { column_center, column_justify_center, contain, flex_justify_center, width_100 } from "../css/style";
import { HomeImage } from "../Components/HomeImage";
import { DownArrow } from "../Components/DownArrow";
import { margin_top_14, margin_top_60 } from "../css/padding";

export const Home = ({moveDescription}) => {
    const [isYear, setIsYear] = useState(2023);
    const [isDay, setIsDay] = useState(28);
    const month = '01';
    const dDay = new Date().getDay() + 1

    const mqTextCenter = {
        [mq[1]]: {
            textAlign: 'center'
        }
    }

    useEffect(() => {
        counter(isYear, setIsYear);
        counter(isDay, setIsDay);
        window.scrollTo(0, 0);
    }, [])

    const counter = (item, setItem) => {
        let now = item;
        const handle = setInterval(() => {
            setItem(Math.ceil(item - now));
          // 목표에 도달하면 정지
          if (now < 1) {
            if(item === 2023) {
                const scroll = document.querySelector('#scroll');
                
                setTimeout(() => {
                    scroll.classList.add('up')
                }, 700);
            }
            clearInterval(handle);
          }
          // 적용될 수치, 점점 줄어듬
          const step = now / 10;
          now -= step;
        }, 50);
    }

    return (
        <div css={{
            ...contain
        }}>
            <div css={{
                ...flex_justify_center,
                ...width_100,
                [mq[1]]: {
                    ...column_center
                }
            }}>
                <HomeImage />
                <div css={{
                    ...column_justify_center
                }} className="set" id="observer" >
                    <div css={{
                        ...font8,
                        ...mqTextCenter,
                        ...width_100
                    }} >{isYear}.{month}.{isDay}</div>
                    <div css={{
                        ...font10,
                        ...mqTextCenter,
                        ...margin_top_60,
                        ...width_100
                    }} >D-{(isDay - dDay)}</div>
                    <div css={{
                        ...font8,
                        ...mqTextCenter,
                        ...width_100,
                        ...margin_top_14
                    }} >집들이에 초대합니다.</div>
                </div>
            </div>

            <DownArrow onClick={moveDescription} />
            
        </div>
    )
}