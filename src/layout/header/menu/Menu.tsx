import React from 'react';
import {S} from "./HeaderMenu_Styles";

export const Menu = () => {
    return (
        <ul role={'menu'}>
            <S.ListItem role={'menuitem'}>
                <S.Link href="">About</S.Link>
            </S.ListItem>
            <S.ListItem role={'menuitem'}>
                <S.Link href="">Projects</S.Link>
            </S.ListItem>
            <S.ListItem role={'menuitem'}>
                <S.Link href="">Contacts</S.Link>
            </S.ListItem>
        </ul>
    );
};

