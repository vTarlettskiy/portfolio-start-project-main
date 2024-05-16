import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {animateScroll as scroll} from "react-scroll";

export const Logo: React.FC = () => {
    return (
        <Link onClick={() => {scroll.scrollToTop()}}>Vahid Navazan</Link>
    );
};

const Link = styled.a`
    font-family: Comfortaa, sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: ${theme.colors.primaryText};
    
    &:hover {
        color: #3af6fc;
        cursor: pointer;
    }
`