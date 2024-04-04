import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";

type ButtonPropsType = {
    btnType?: 'primary' | 'secondary'
}

export const Button = styled.button<ButtonPropsType>`
    height: 43px;
    border-radius: 8px;
    font-family: Roboto, sans-serif;
    font-size: 18px;

    ${props => props.btnType === 'primary' && css<ButtonPropsType>`
        background-color: ${theme.colors.accent};
        width: 115px;
    `}

    ${props => props.btnType === 'secondary' && css<ButtonPropsType>`
        width: 115px;
        border: 2px solid ${theme.colors.primaryText};
    `}
`