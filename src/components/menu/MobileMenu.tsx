import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";

export const MobileMenu = (props: PopupPropsType) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={true}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={true}>
                <ul role={'menu'}>
                    <ListItem role={'menuitem'}>
                        <Link href="">About</Link>
                    </ListItem>
                    <ListItem role={'menuitem'}>
                        <Link href="">Projects</Link>
                    </ListItem>
                    <ListItem role={'menuitem'}>
                        <Link href="">Contacts</Link>
                    </ListItem>
                </ul>
            </MobileMenuPopup>

        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;
    
    @media ${theme.media.mobile} {
        display: block;
    }
`

type PopupPropsType = {
    isOpen: boolean
}

const MobileMenuPopup = styled.div<PopupPropsType>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: ${theme.colors.accent};
    display: none;
    
    ${props => props.isOpen && css<PopupPropsType>`
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

const BurgerButton = styled.button<PopupPropsType>`
    position: fixed;
    width: 24px;
    height: 24px;
    z-index: 99999999;

    span {
        display: block;
        width: 100%;
        height: 2px;
        background-color: #000000;
        position: absolute;

        ${props => props.isOpen && css<PopupPropsType>`
            color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: '';
            display: block;
            width: 100%;
            height: 2px;
            background-color: #000000;
            //position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<PopupPropsType>`
                transform: rotate(45deg) translateY(0);
            `}
        }

        &::after {
            content: '';
            display: block;
            width: 100%;
            height: 2px;
            background-color: #000000;
            //position: absolute;

            transform: translateY(10px);

            ${props => props.isOpen && css<PopupPropsType>`
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