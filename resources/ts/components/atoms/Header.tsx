import React from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Header = () => {

    return (
        <StyledHeaderWrapper>
            <StyledHeaderAnchorLink href="#gallery" offset="0" className='stalkerTarget'>Gallery</StyledHeaderAnchorLink>
            <StyledHeaderAnchorLink href="#nft" offset="0" className='stalkerTarget'>NFT</StyledHeaderAnchorLink>
            <StyledHeaderAnchorLink href="#bio" offset="0" className='stalkerTarget'>Biography</StyledHeaderAnchorLink>
        </StyledHeaderWrapper>
    )
}

const StyledHeaderWrapper = styled.div`
    width: 30px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    padding: 10px;
    background-color: black;
    z-index: 999;

    @media(max-width: 599px) {
        width: 100vw;
        height: 30px;
    }
`

const StyledHeaderAnchorLink = styled(AnchorLink)`
    writing-mode: vertical-rl;
    padding: 15px 0;
    color: white;
    text-decoration: none;
    @media(max-width: 599px) {
        writing-mode: horizontal-tb;
        padding: 0 15px;
    }
`