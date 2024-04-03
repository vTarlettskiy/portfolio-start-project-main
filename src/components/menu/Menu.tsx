import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <ListItem>
                    <Link href="">About</Link>
                </ListItem>
                <ListItem>
                    <Link href="">Projects</Link>
                </ListItem>
                <ListItem>
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