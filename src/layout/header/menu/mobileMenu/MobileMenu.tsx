import React from 'react';
import {PopupPropsType, S} from '../HeaderMenu_Styles'
import {Menu} from "../Menu";


export const MobileMenu: React.FC<PopupPropsType> = ({isOpen, setIsOpen}: PopupPropsType) => {

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <Menu/>
            </S.MobileMenuPopup>

        </S.MobileMenu>
    );
};

