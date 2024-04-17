import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/image-2.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Button} from "../../../components/Button";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap-reverse'}>
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
                    <Photo src={photo} alt=''/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
    position: relative;
    
`

const Photo = styled.img`
    width: 720px;
    height: 630px;
    object-fit: cover;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    
    @media ${theme.media.tablet} {
        width: auto;
        height: 407px;
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
    
    @media screen and (max-width: 1000px) {
        margin-top: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 100%;
    }
    
    @media screen and (max-width: 855px) {
        margin-top: 600px
    }
    
    @media ${theme.media.tablet} {
        margin-top: 450px
    }
    
    
`
