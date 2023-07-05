import React, {useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


/**
 * @param {BioTextProps} props - プロパティ
 * @property {string} state - 現在の画像URL
 * @property {string} to - リンク先URL
 */

type HoverImageProps = {
    imgURL: string;
    to: string;
    state: {imgURL: string }
    
}

export const HoverImage = (props: HoverImageProps) => {
    const {imgURL, to, state} = props;

    useEffect(() => {
        const scrollAnimationElm = document.querySelectorAll('.fadeIn');
        const scrollAnimationFunc = () => {
            for(let i = 0; i < scrollAnimationElm.length; i ++) {
                const triggerMargin = 30;
                if(window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
                    scrollAnimationElm[i].classList.add('visible');
                }
            }
        }
        window.addEventListener('load', scrollAnimationFunc);
        window.addEventListener('scroll', scrollAnimationFunc);

    }, [])

    
    

    
    return (
        <Link to={to} state={state}>
            <StyledImage src={imgURL} className='stalkerTarget fadeIn'></StyledImage>
        </Link>
    )
}

const StyledImage = styled.img`
    width: calc(100vw * 350 / 1280);
    transition: 0.8s ease-in-out;
    transform: translateY(30px);
    opacity: 0;
    
    &.visible {
        transform: translateY(0);
        opacity: 1.0;
    }
`

const StyledHoverImage = styled(HoverImage)`
`