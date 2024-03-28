import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/image-2.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <MainTitle>Software Developer</MainTitle>
                    <Greetings>Hello,  my name is Vahid Navazan</Greetings>
                    <About>Short text with details about you, what you do or your professional career. You can add more information on the about page.</About>

                    <div>
                        <StyledButton>Projects</StyledButton>
                        <StyledButton>LinkedIn</StyledButton>
                    </div>
                </div>

                <Photo src={photo} alt=''/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 100vh;
`

const Photo = styled.img`
  width: 720px;
  height: 630px;
  object-fit: cover;
  
`

const MainTitle = styled.h1`
  
`

const Greetings = styled.span`
  
`

const About = styled.p`

`

const StyledButton = styled.button`

`