import React from 'react';
import {S} from "./HeaderMenu_Styles";

export const Menu = () => {
    return (
        <ul role={'menu'}>
            <S.ListItem role={'menuitem'} >
                <S.NavLink to="main" spy={true} smooth={true} duration={800}>About</S.NavLink>
            </S.ListItem>
            <S.ListItem role={'menuitem'}>
                <S.NavLink to="projects" spy={true} smooth={true} duration={800}>Projects</S.NavLink>
            </S.ListItem>
            <S.ListItem role={'menuitem'}>
                <S.NavLink to="contacts" spy={true} smooth={true} duration={800}>Contacts</S.NavLink>
            </S.ListItem>
        </ul>
    );
};

