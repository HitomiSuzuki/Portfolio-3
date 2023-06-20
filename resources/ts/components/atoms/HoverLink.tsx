import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";



export const HoverLink = (props: {children: string, to: string}) => {
    const {children, to} = props

    return (
        <StyledLink to={to}>{children}</StyledLink>
    )
}


const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 30px;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: -20px;
        width: 110%;
        height: 4px;
        background: black;
        transition: all .3s;
        transform: scale(0, 1);
        transform-origin: left top;
    }

    &:hover::after {
        transform: scale(1, 1);
    }
`
