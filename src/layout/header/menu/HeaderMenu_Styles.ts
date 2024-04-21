import {theme} from "../../../styles/Theme";
import styled, {css} from "styled-components";

//Desktop Menu Styles

const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 48px;
        justify-content: center;
    }

`

//Mobile Menu Styles

export type PopupPropsType = {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

const MobileMenu = styled.nav`

`


const MobileMenuPopup = styled.div<Pick<PopupPropsType, 'isOpen'>>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: ${theme.colors.accent};
    display: none;

    ${props => props.isOpen && css<Pick<PopupPropsType, 'isOpen'>>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    ul {
        display: flex;
        gap: 48px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

const BurgerButton = styled.button<Pick<PopupPropsType, 'isOpen'>>`
    position: fixed;
    width: 24px;
    height: 24px;
    top: 14px;
    right: 11px;
    z-index: 99999999;


    span {
        display: block;
        width: 18px;
        height: 2px;
        background-color: ${props => props.isOpen ? 'transparent' : '#000000'};
        position: absolute;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 2px;

        ${props => props.isOpen && css<Pick<PopupPropsType, 'isOpen'>>`
            color: rgba(255, 255, 255, 0);
        `}
        
        &::before {
            content: '';
            display: block;
            width: 100%;
            height: 2px;
            border-radius: 2px;
            background-color: #000000;
            position: absolute;
            transform: translateY(-6px);
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

            ${props => props.isOpen && css<Pick<PopupPropsType, 'isOpen'>>`
                transform: rotate(45deg) translateY(0);
            `}
        }

        &::after {
            content: '';
            display: block;
            width: 100%;
            height: 2px;
            background-color: #000000;
            position: absolute;
            transform: translateY(6px);
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 2px;

            ${props => props.isOpen && css<Pick<PopupPropsType, 'isOpen'>>`
                transform: rotate(-45deg) translateY(0);
            `}
        }
    }
`

const ListItem = styled.li`

`

const Link = styled.a`
    font-family: Raleway, sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: ${theme.colors.primaryText};
    text-align: center;


`

export const S = {
    Link,
    ListItem,
    DesktopMenu,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton

}