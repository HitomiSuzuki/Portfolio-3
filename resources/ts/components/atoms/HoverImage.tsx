import React, {useEffect} from "react";
import styled from "styled-components";


type HoverImageProps = {
    imgURL: string;
}

export const HoverImage = (props: HoverImageProps) => {
    const {imgURL} = props;

    useEffect(() => {
        const scrollAnimationElm = document.querySelectorAll('.fadeIn');
        console.log(scrollAnimationElm)
        const scrollAnimationFunc = () => {
            for(let i = 0; i < scrollAnimationElm.length; i ++) {
                const triggerMargin = 30;
                console.log(window.innerHeight);
                console.log(scrollAnimationElm[i].getBoundingClientRect().top)
                if(window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
                    scrollAnimationElm[i].classList.add('visible');
                }
            }
        }
        window.addEventListener('load', scrollAnimationFunc);
        window.addEventListener('scroll', scrollAnimationFunc);

    }, [])

    
    

    
    return (

        <StyledImage src={imgURL} className='stalkerTarget fadeIn'></StyledImage>
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