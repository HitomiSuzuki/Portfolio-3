import React, { useRef, MouseEvent } from "react";
import styled from 'styled-components';

export const SiteTitle: React.FC = () => {

    

    const func = (e: MouseEvent) => {
        // マウスの座標を取得して 中心からの距離取得、 そこからpararaxValで距離を調整
        let x = (xCenter - e.pageX) / parallaxVal;
        let y = (yCenter - e.pageY) / parallaxVal;

        if(!targetRef.current) {
            return
        }

        // マウスが円を出ないように調整
        if(x > 30 || x < -30) {
            targetRef.current.style.transform = `translate(0px, 0px)`;
            return
        }
        // マウスが円を出ないように調整
        if(y > 30 || y < -30) {
            targetRef.current.style.transform = `translate(0px, 0px)`;
            return
        }

        // パララックスさせる要素にstyleの指定
        targetRef.current.style.transform = `translate(${-x}px, ${-y}px)`;
    }
    
    //パララックスを行うエリア取得
    const activeAreaRef = useRef<HTMLDivElement>(null);
    // パララックスのターゲット取得
    const targetRef = useRef<HTMLDivElement>(null);
    // ウィンドウの中心の取得
    const xCenter = window.innerWidth - 800;
    const yCenter = window.innerHeight - 400;
    // パララックスで移動させる距離
    const parallaxVal = 10; //中心からマウスの距離の10分１移動
    
    return (
        <StyledPararaxArea ref={activeAreaRef} onMouseMove={func}>
            <StyledJsPararax id="js-parallax-item" ref={targetRef}></StyledJsPararax>
            <StyledO />
            <StyledText>yama</StyledText>
        </StyledPararaxArea>
    )
}

interface Props {
    ref?: React.RefObject<HTMLDivElement>
}

const StyledPararaxArea = styled.div<Props>`
    z-index: 100;
    position: absolute;
    height: 100vh;
    width: calc(100vw - 60px);
    display: flex;
    justify-content: center;
    align-items: center;

`

const StyledJsPararax = styled.div`
    position: relative;
    width: 20px;
    height: 20px;
    z-index: 1;
    border-radius: 20px;
    background-color: white;
    -webkit-transition: all .3s linear .001s;
    transition: all .3s linear .001s;
    box-shadow: 0 0 10px black;
    right: -60px;
    top: 0;
    &:hover+div  {
        background: black;
        box-shadow: 0 0 10px yellow;
    }
`

const StyledO = styled.div`
    position: relative;
    right: 10px;
    width: 100px;
    height: 100px;
    border-radius: 100px;
    border: 10px solid white;
    box-shadow: 0 0 10px black, inset 0 0 10px black;
    transition: all .3s linear .001s;
    &:hover  {
        background: black;
        box-shadow: 0 0 10px yellow;
    }
`

const StyledText = styled.p`
    font-size: 50px;
    position: relative;
    right: 10px;
    bottom: -24px;
    font-weight: 900;
    color: white;
    -webkit-filter: drop-shadow(0 0 5px black);
    filter: drop-shadow(0 0 5px black);
`