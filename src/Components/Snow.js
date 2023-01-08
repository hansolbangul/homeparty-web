import React, { useEffect } from "react";
import './snowFlake.css';

export const Snow = () => {
    const makeSnow = () => {
        const MIN_DURATION = 10;
        const arr = Array.from({ length: 100 });
        const bodyEl = document.querySelector('#root');

        arr.map((_, index) => {
            // 눈송이 개별 style 적용
            const left = Math.random() * window.innerWidth;
            const delay = Math.random() * 10;
            const initialOpacity = Math.random();
            const duration = Math.random() * 20 + MIN_DURATION;

            const snowDiv = document.createElement('div');
            snowDiv.classList.add('snowFlake');
            snowDiv.style.left = `${left}px`;
            snowDiv.style.opacity = initialOpacity;
            snowDiv.style.animation = `fall ${duration}s linear`;
            snowDiv.style.animationDelay = `${delay}s`;
            snowDiv.style.color = 'white'
            snowDiv.innerText = "\u2745";
            snowDiv.setAttribute("id", `snow-${index}`);
            bodyEl.appendChild(snowDiv)

            setTimeout(() => {
                // element 찾기
                const snowEl = document.querySelector(`#snow-${index}`);

                // 제거하기
                bodyEl?.removeChild(snowEl);
            }, (duration + delay) * 1000)
        })
    }

    const scrollEvent = () => {
        if (!(window.scrollY % 100)) {
            makeSnow();
        }
    }

    useEffect(() => {
        makeSnow();

        window.addEventListener('scroll', scrollEvent);
    }, [])

    return (
        <>
        </>
    )
}