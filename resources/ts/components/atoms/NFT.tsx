import React, {useRef} from "react";
import styled from "styled-components";

export const NFT = () => {
    const fadeinFromLeft = useRef<HTMLParagraphElement>(null);
    const fadeInFromRight = useRef<HTMLParagraphElement>(null);

    const fadeInItemArray = [fadeinFromLeft,fadeInFromRight]

    const fadeInFunc = () => {
        fadeInItemArray.map(item => {
            if(!item.current) {
                return;
            }
            const fadeInElmTop = item.current?.getBoundingClientRect().top;
    
            const windowHeight = window.innerHeight;
    
            if(window.innerHeight > (fadeInElmTop + 300)) {
                item.current.classList.add('after');
            } else {
                item.current.classList.remove('after');
            }
        })
        
    }

    window.addEventListener('scroll', fadeInFunc);


    return(
        <>
        <StyledNFTWrapper id="target">
            <StyledNFTTextInner>
                <StyledNFTText ref={fadeinFromLeft}>Selling</StyledNFTText>
            </StyledNFTTextInner>
            <StyledNFTTextInner>
                <StyledNFTText ref={fadeInFromRight}>NFT</StyledNFTText>
            </StyledNFTTextInner>
        </StyledNFTWrapper>
        </>
    )
}

const StyledNFTWrapper = styled.div`
   

`

const StyledNFTInner = styled.div`
    position: relative;
    display: flex;
    &:nth-of-child(2n) {
        justify-content: flex-end;
    }
`

const StyledNFTTextInner = styled.div`
    display: flex;
    &:nth-of-type(2n + 1) {
        p {
            transform: translateX(-500px);
            &::before {
                transform-origin: left top;
                left: 0;
            }
            
        }
    }

    &:nth-of-type(2n) {
        
        height: 285px;
        justify-content: end;
        p {
            transform: translateX(500px);
            position: absolute;
            padding-right: 50px;
            right: 0;
            &::before {
                transform-origin: right top;
                right: 0;
            }
        }
    }
`

const StyledNFTText = styled.p`
    font-size: 190px;
    position: relative;
    transition: transform 1s;
    margin: 0;

    &::before {
        content: '';
        position: absolute;
        bottom: 60px;
        width: 130%;
        height: 20px;
        background: black;
        transition: all 1s;
        transform: scale(0, 1);
        
    }

    &.after {
        transform: translate(0) !important;
        &::before {
            transform: scale(1, 1);
        }
        &::after {
            transform: scale(1, 1);
        }
    }
`