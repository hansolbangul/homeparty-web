/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef } from "react";
import { mq } from "../global";
import { contain, flex_align_center } from "../css/style";
import { CopyIcon } from "../Components/CopyIcon";
import { copyText } from "../export/function";
import { font3, font5 } from "../css/font";
import { margin_bottom_20, margin_bottom_40 } from "../css/padding";

export const Map = () => {
    const ref = useRef();

    useEffect(() => {
        // 네이버 지도 세팅
        const mapDiv = document.getElementById("map");
        const map = new window.naver.maps.Map(mapDiv, {
            center: new window.naver.maps.LatLng(37.4729837226527, 126.967169015981),
            zoom: 18
        });
        new window.naver.maps.Marker({
            position: new window.naver.maps.LatLng(37.4729837226527, 126.967169015981), //Marker 추가, 좌표에 마커가 찍힌다.
            map: map,
        })
    }, []);

    return (
        <div css={{
            ...contain
        }}>
            <h2 className="set" id="observer" css={{
                ...font5,
                ...margin_bottom_40
            }}>📍  주소  📍</h2>
                <div className="set" id="observer" css={{
                    ...flex_align_center,
                    ...margin_bottom_20,
                    columnGap: '6px'
                }}>
                    <h4 ref={ref} css={{
                        ...font3,
                    }}>서울특별시 관악구 인헌9길 11-3</h4>
                    <CopyIcon onClick={() => copyText(ref.current.innerText)}/>
                </div>
                <div className="set" id="map" css={{
                    width: '800px',
                    aspectRatio: '2 / 1',
                    [mq[1]]: {
                        width: '70%',
                        aspectRatio: '1 / 1'
                    }
                }} />
        </div>
    )
}