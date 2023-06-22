import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Header = () => {

    return (
        <StyledHeaderWrapper>
            <StyledHeaderLink to="/">Gallery</StyledHeaderLink>
            <StyledHeaderAnchorLink href="#nft" offset="50">NFT</StyledHeaderAnchorLink>
            <StyledHeaderAnchorLink href="#bio" offset="50">Biography</StyledHeaderAnchorLink>
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
`

const StyledHeaderLink = styled(Link)`
    writing-mode: vertical-rl;
    padding: 15px 0;
    color: white;
    text-decoration: none;
`

const StyledHeaderAnchorLink = styled(AnchorLink)`
    writing-mode: vertical-rl;
    padding: 15px 0;
    color: white;
    text-decoration: none;
`