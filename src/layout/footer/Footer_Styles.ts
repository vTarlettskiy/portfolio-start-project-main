import styled from "styled-components";
import {theme} from "../../styles/Theme";
import image from '../../assets/images/image-5.webp'


const Footer = styled.footer`
    position: relative;
    height: auto;
    
    &::after {
        background: url(${image}) center center / 100% 100% no-repeat;
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: -100;
        width: 100%;
        aspect-ratio: 1440/344;
        
    }
    
    padding-bottom: 240px;
    
    @media ${theme.media.tablet} {
        padding-bottom: 90px;
    }
`

const SocialList = styled.ul`
    list-style: none;
    display: flex;
    gap: 25px;
    margin: 56px 0 32px 0;
    
`

const SocialItem = styled.li`
    &:last-child {
        position: relative;
        bottom: -3px;
    }
`

const SocialLink = styled.a`

`

const Copyright = styled.small`
    
`

export const S = {
    Footer,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright
}