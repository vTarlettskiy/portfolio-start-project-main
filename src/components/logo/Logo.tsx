import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Logo: React.FC = () => {
    return (
        <Link href=''>Vahid Navazan</Link>
    );
};

const Link = styled.a`
    font-family: Comfortaa, sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: ${theme.colors.primaryText};
`