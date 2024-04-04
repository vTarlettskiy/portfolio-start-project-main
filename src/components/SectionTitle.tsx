import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
    text-align: center;
    font-family: Playfair Display, sans-serif;
    font-size: 48px;
    font-weight: Bold;
    line-height: 80px;
    margin-bottom: 88px;
    position: relative;
    
    
    &::before {
        content: '';
        display: inline-block;
        width: 100px;
        height: 4px;
        background-color: ${theme.colors.accent};
        border-radius: 2px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
`