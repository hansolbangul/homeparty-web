/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef } from "react";
import { Home } from "./Home";
import { mq } from "../global";
import { Schedule } from "./Schedule";
import { Description } from "./Description";
import { Gift } from "./Gift";
import { Map } from "./Map";
import { column_align_center, width_100, width_100vw } from "../css/style";

export const Main = () => {
    const desRef = useRef();

    const moveDescription = () => {
        desRef.current?.scrollIntoView({behavior: 'smooth'})
    }

    useEffect(() => {
        
        // window.addEventListener('scroll', () => console.log('scroll'));

        const options = {
            root: null, // viewport
            rootMargin: "0px",
            threshold: 0.5,  // 50%가 viewport에 들어와 있어야 callback 실행
        }

        const io = new IntersectionObserver((item) => {
            item.forEach((entry) => {
                if (entry.intersectionRatio) {
                    entry.target.classList.add('up');
                    io.unobserve(entry.target);
                }
            })
        }, options)

        let box = document.querySelectorAll('#observer')
        let map = document.querySelector('#map')

        box.forEach((el) => {
            io.observe(el)
        })

        io.observe(map);

        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="height" style={{ width: '100vw'}}>
            <div css={{
                ...column_align_center,
                ...width_100,
                [mq[1]]: {
                    ...width_100vw
                }
            }}>
                <Home moveDescription={moveDescription}/>
                <Description ref={desRef}/>
                <Schedule />
                <Map />
                <Gift />
            </div>
        </div>
    )
}