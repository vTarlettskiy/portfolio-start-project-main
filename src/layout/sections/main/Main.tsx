import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/image-2.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Button} from "../../../components/Button";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <InfoBlock>
                        <MainTitle>Software Developer</MainTitle>
                        <Greetings>Hello, my name is Vahid Navazan</Greetings>
                        <About>Short text with details about you, what you do or your professional career. You can add
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

const StyledMain = styled.div`
  min-height: 100vh;
  display: flex;
  
`

const Photo = styled.img`
  width: 720px;
  height: 630px;
  object-fit: cover;
  position: relative;
  bottom: 101px;
  left: 15px;
`

const MainTitle = styled.h1`
  
`

const Greetings = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 64px;
  font-weight: Bold;
  line-height: 120%;
  
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
  
`
