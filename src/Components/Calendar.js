/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useCallback, useEffect, useState } from "react";
import { flex } from "../css/style";
import { mq } from "../global";
import { Day } from "./Day";
import { Form } from "./Form";

export const Calendar = ({setItem}) => {
    const [day, setDay] = useState(Array.from({length: 31}, () => ({check: false})));
    const nonDay = [12, 13, 14, 15, 16, 17, 18];

    console.log(day)

    const clickDay = (i, children) => {
        // setDay(item => item[index].check = !day[index].check)
        if(nonDay.includes(children)) {
            alert('휴가주간 입니다.');
            return;
        }
        setDay(item => item.map((value, index) => index === i ? {check: !day[index].check} : value))
    }

    useEffect(() => {
        let check = []
        day.forEach((item, index) => {
            if(item.check === true){
                check.push(index-2);
            }
        })
        setItem(check)
    }, [day])

    const calendarDay = useCallback(() => {
        const setDayCal = [];
        const twoTotalDay = new Date(2023, 2, 0).getDate();
        const toDay = new Date(2023, 1, 1).getDay()
        
        for(let i = 0; i < twoTotalDay + toDay; i++){
            setDayCal.push(
                <Day nonDay={nonDay} item={day[i].check} onClick={() => clickDay(i, i - toDay + 1)} key={i} type={i < toDay}>
                    {i - toDay + 1}
                </Day>
            )
        }

        return setDayCal;
    }, [day])

    return (
        <div className="set" id="observer" css={{
            ...flex,
            width: '40%',
            flexWrap: 'wrap',
            gap: '6px',
            [mq[1]]: {
              width: '90%'  
            } 
        }}>
            {calendarDay()}
        </div>)
}