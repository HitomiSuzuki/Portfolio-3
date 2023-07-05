import React from "react";
import styled from "styled-components";
import $ from "jquery";
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/**
 * @param {BioTextProps} props - プロパティ
 * @property {string[]} imgArray - 画像の配列
 */

type CarouselProps = {
    imgArray: string[];
}


export const TopCarousel = (props: CarouselProps) => {
    const {imgArray} = props;

    $(function(){
        $('.slider').not('.slick-initialized').slick({
            dots: false,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            swipe: true,
            fade: true
        })
    });

    return(
        <StyledCarouselWrapper className="slider">
            {imgArray.map((img, i) => {
                return (
                    <StyledCarouselImageWrapper key={i} img={img} />
                )
            })}
        </StyledCarouselWrapper>
    )
}

const StyledCarouselWrapper = styled.div`
    height: 100vh;
    margin: 0;
`

const StyledCarouselImageWrapper = styled.div<{img: string}>`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    margin: 0;
    ${(props) => `background-image: url(${props.img})`};
`