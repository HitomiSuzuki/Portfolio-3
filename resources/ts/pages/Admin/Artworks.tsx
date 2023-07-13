import React from "react";
import styled from "styled-components";
import {  HoverImages } from "../../components/molecules/HoverImages";
import img1 from '../../static/img1.jpg';
import img2 from '../../static/img2.jpg';
import img3 from '../../static/img3.jpg';
import img4 from '../../static/img4.jpg';
import img5 from '../../static/img5.jpg';
import img6 from '../../static/img6.jpg';
import img7 from '../../static/img7.jpg';
import img8 from '../../static/img8.jpg';

export const Artworks = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8]
    return (
        <HoverImages images={images}></HoverImages>
        
    )
}


const StyledHoverImageList = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const StyledHoverImageItem = styled.li``
