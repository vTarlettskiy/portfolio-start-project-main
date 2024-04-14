import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Container = styled.div`
    max-width: 1230px;
    width: 100%;
    min-height: 100%;
    margin: 0 auto 145px auto;
    padding: 0 15px;
    
    @media ${theme.media.mobile} {
        margin: 0 auto 80px auto;
    }
`