import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const Main = styled.section<{name?: string}>`
    min-height: auto;
    display: flex;
    padding: 110px 0 254px 0;
    overflow: hidden;

    @media ${theme.media.tablet} {
        padding-bottom: 90px;
    }
    
`

const Photo = styled.img`
    object-fit: cover;
    position: absolute;
    top: -127px;
    right: -111px;
    z-index: 111;
    
    @media ${theme.media.tablet} {
        width: auto;
        height: 407px;
    }
`

const PhotoBG = styled.img`
    object-fit: cover;
    position: absolute;
    top: -376px;
    right: -167px;
    z-index: -1;

    @media ${theme.media.tablet} {
        width: auto;
        height: 550px;
        top: -271px;
        right: -146px
    }

`

const MainTitle = styled.h1`
    
`

const Greetings = styled.span`
     // ${font({family: 'Roboto', weight: 700, Fmin: 42, Fmax: 64})}
    font-family: Roboto, sans-serif;
    font-size: 64px;
    font-weight: 700;

    @media ${theme.media.mobile} {
        font-size: 42px;
    }
`

const About = styled.p`
    padding: 32px 22px 32px 0;
    font-family: Nunito, sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;

`

const ButtonBlock = styled.div`
    display: flex;
    gap: 12px;

`

const InfoBlock = styled.div`
    position: relative;
    z-index: 1;
    width: fit-content;
    max-width: 510px; //     margin-top: 471px;
    
    @media screen and (max-width: 934px) {
        margin-top: 600px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 100%;
        
    }
    
    
    @media ${theme.media.tablet} {
        margin-top: 333px
    }
    
    
`

const PhotoContainer = styled.div`
    position: relative;
    z-index: 0;
`

export const S = {
    Main,
    Photo,
    PhotoBG,
    MainTitle,
    Greetings,
    About,
    ButtonBlock,
    InfoBlock,
    PhotoContainer
}