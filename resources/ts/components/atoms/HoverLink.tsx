import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";


/**
 * @param {BioTextProps} props - プロパティ
 * @property {string} children - テキストとなる小要素
 * @property {string} to - リンク先URL
 */

type HoverLinkProps = {
    children: string;
    to: string;
}

export const HoverLink = (props: HoverLinkProps) => {
    const {children, to} = props

    return (
        <StyledLink to={to} className="stalkerTarget">{children}</StyledLink>
    )
}


const StyledLink = styled(Link)`
    display: inline-block;
    margin: 80px 0 0;
    text-decoration: none;
    color: black;
    font-size: 30px;
    position: relative;
    text-align: center;
    &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: -40px;
        width: 100%;
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
