import React, {useRef, useEffect} from "react";
import styled from "styled-components";

export const MouseStalker = () => {

    const stalker = useRef<HTMLDivElement>(null); //マウスストーカー
    
    const stalkerArea = document.getElementById('app'); //ストーキングするエリア
    let scroll = 0;
    

    //処理（追従）
    const MouseMoveFunction = (e: MouseEvent) => {

        if(!stalker.current) {
            return
        }
    
        const stalkerSize = window.getComputedStyle(stalker.current).getPropertyValue('width').substring(0, 2);
        const cssPosisionAdjust = (Number(stalkerSize) / 2);
        const x = e.clientX - cssPosisionAdjust;
        const y = e.clientY - cssPosisionAdjust;
        stalker.current.style.transform = `translate(${x}px, ${y + scroll}px)`;
    }

    //処理(リンクホバー)
    const HoverFunction = (e: Event) => {
        if(!stalker.current) {
            return
        }
        stalker.current.style.width = "60px";
        stalker.current.style.height = "60px";
    }

    //処理(リンクホバー)
    const HoverOutFunction = (e: Event) => {
        if(!stalker.current) {
            return
        }
        stalker.current.style.width = "25px";
        stalker.current.style.height = "25px";
    }

    stalkerArea?.addEventListener('mousemove', MouseMoveFunction);
    

    window.addEventListener('scroll', (e: Event) => {
        scroll = window.scrollY;
    })

    useEffect(() => {
        const targets = Array.from(document.getElementsByClassName('stalkerTarget')); //リンクなど
        targets?.forEach((target) => {
            target.addEventListener('mouseenter', HoverFunction);
        })
    
        targets?.forEach((target) => {
            target.addEventListener('mouseleave', HoverOutFunction);
        })
    }, [])

    return (
        <StyledStalker ref={stalker}></StyledStalker>
    )
}

const StyledStalker = styled.div`
    position: absolute;
    width: 25px;
    height: 25px;
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid rgb(74, 74, 74);
    border-radius: 50%;
    transition: all 0.3s;
    transition-timing-function: ease-out;
    pointer-events: none;
    z-index: 10;

    &.hover {
        background-color: rgba(255, 255, 255, 0.7);
    }
`