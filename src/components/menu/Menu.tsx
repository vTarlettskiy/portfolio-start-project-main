import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Menu = () => {
    return (
        <StyledMenu>
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
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 48px;
        justify-content: center;
    }
    
    @media ${theme.media.mobile} {
        ul {
            display: none;
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