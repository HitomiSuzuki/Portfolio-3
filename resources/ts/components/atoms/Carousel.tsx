import React from "react";
import styled from "styled-components";
import $ from "jquery";
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 
import prevArrow from '../../static/Arrow11.png';
import nextArrow from '../../static/Arrow12.png';

type CarouselProps = {
    imgArray: string[];
    isMain?: boolean;
}


export const Carousel = (props: CarouselProps) => {
    const {imgArray, isMain} = props;

    $(function(){
        $('.slider').not('.slick-initialized').slick({
            dots: false,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: true,
            swipe: true
        })
    });

    return(
        <StyledCarouselWrapper className="slider">
            {imgArray.map((img, i) => {
                return (
                    <StyledCarouselImageWrapper key={i}>
                        <StyledCarouselImage src={img}></StyledCarouselImage>
                    </StyledCarouselImageWrapper>
                )
            })}
        </StyledCarouselWrapper>
    )
}

const StyledCarouselWrapper = styled.div`
    height: 100vh;
    padding: 150px 0 120px;

    .slick-arrow {
        right: 30px;
        left: auto;
        &::before {
            content: '';
            width: 46px;
            display: block;
            height: 17px;
            background-repeat: no-repeat;
        }
    }

    .slick-prev {
        top: 100px;
        &::before {
            background-image: url(${prevArrow}); 
        }
    }

    .slick-next {
        top: 130px;
        &::before {
            background-image: url(${nextArrow}); 
        }
    }
`

const StyledCarouselImageWrapper = styled.div`
    width: 100%;
    height: calc(100vh - 240px);
`

const StyledCarouselImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
`