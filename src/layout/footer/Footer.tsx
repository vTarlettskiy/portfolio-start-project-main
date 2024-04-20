import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import image from '../../assets/images/image-5.webp'
import {theme} from "../../styles/Theme";


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'} justify={'center'}>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'icon13'} height={'38px'} width={'38px'} viewBox={'border-box'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'icon14'} height={'38px'} width={'38px'} viewBox={'border-box'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'icon15'} height={'48px'} width={'48px'} viewBox={'border-box'}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>Vadim Tarletskiy 2024 </Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
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