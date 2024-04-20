import React from 'react';
import styled from "styled-components";
import bg from '../../../assets/images/yellow-bg.webp';
import photo from '../../../assets/images/photo.webp';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Button} from "../../../components/Button";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'flex-end'} justify={'space-between'} wrap={'wrap-reverse'}>
                    <InfoBlock>
                        <MainTitle>Software Developer</MainTitle>
                        <Greetings>Hello, my name<br/> is Vahid Navazan</Greetings>
                        <About>Short text with details about you, what you do or your professional career. You can
                            add
                            more information on the about page.</About>
                        <ButtonBlock>
                            <Button btnType={'primary'}>Projects</Button>
                            <Button btnType={'secondary'}>LinkedIn</Button>
                        </ButtonBlock>
                    </InfoBlock>
                    <PhotoContainer>
                        <Photo src={photo} alt=''/>
                        <PhotoBG src={bg} alt=''/>
                    </PhotoContainer>

                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: auto;
    display: flex;
    padding: 110px 0 254px 0;
    overflow: hidden;
    
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
