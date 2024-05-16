import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";

type ButtonPropsType = {
    btnType?: 'primary' | 'secondary' | 'projects'
    btnAlign?: 'end'
}

export const Button = styled.button<ButtonPropsType>`
    height: 43px;
    width: 115px;
    border-radius: 8px;
    font-family: Roboto, sans-serif;
    font-size: 18px;

    ${props => props.btnType === 'primary' && css<ButtonPropsType>`
        background-color: ${theme.colors.accent};
    `}

    ${props => props.btnType === 'secondary' && css<ButtonPropsType>`
        border: 2px solid ${theme.colors.primaryText};
    `}
    
    ${props => props.btnType === 'projects' && css<ButtonPropsType>`
        width: 150px;
        border: 1px solid ${theme.colors.primaryText};
        border-radius: 24px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        color:  black ;
        
        &:hover {
            background-color: ${theme.colors.accent};
            border: 1px solid ${theme.colors.accent};
        }
    `}
    
    
    ${props => props.btnAlign === 'end' && css<ButtonPropsType>`
        align-self: flex-end;
    `}
`