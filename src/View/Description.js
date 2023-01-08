/** @jsxImportSource @emotion/react */
import React, { forwardRef } from "react";
import { font4, font5 } from "../css/font";
import { column_align_center, contain } from "../css/style";
import { margin_bottom_16, margin_bottom_20, margin_bottom_40 } from "../css/padding";

export const Description = forwardRef((props, ref) => {
    const warning = [
        '무슨일이 있어도 잠은 (본인)집에서 자기', 
        '🤮 하는 즉시 퇴출 및 재방문 불가', 
        '집이 매우 협소해도 😡 불평불만하지 않기', 
        '😵 취해도 데려다주지 않음'
    ];

    const have = [
        '먹고싶은 🍹 술은 알아서 가져오기', 
        '먹고싶은 🍗 안주는 알아서 가져오기', 
        '집들이 선물 ❤️‍🔥'
    ];

    const objectTitle = [
        {
            title: '🚨  방문시 주의사항  🚨',
            item: warning
        },
        {
            title: '⚒️  준비물  ⚒️',
            item: have
        },
    ]

    return (
        <div ref={ref} css={{
            ...contain
        }}>
            {objectTitle.map((value, valueIndex) => (
                <div key={valueIndex} className="set" id="observer" css={{
                    ...column_align_center,
                    ...margin_bottom_20
                }}>
                    <h2 key={valueIndex} css={{
                        ...font5,
                        ...margin_bottom_40
                    }}>{value.title}</h2>
                    {value.item.map((item, itemIndex) => (
                        <h4 key={itemIndex} css={{
                            ...font4,
                            ...margin_bottom_16
                        }}>
                            {itemIndex + 1}. {item}
                        </h4>
                    ))}
                </div>
            ))}
        </div>
    )
})