import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./Project";
import project1IMage from '../../../assets/images/project1Image.webp'
import project2IMage from '../../../assets/images/project2Image.webp'
import project3IMage from '../../../assets/images/project3Image.webp'
import {Container} from "../../../components/Container";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'} >
                    <Project projectName={'Project name'}
                             description={'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.'}
                             image={project1IMage}/>

                    <Project projectName={'Project name'}
                             description={'What was your role, your deliverables, if the project was personal, freelancing.'}
                             image={project2IMage}/>

                    <Project projectName={'Project name'}
                             description={'You can also add in this description the type of the project, if it was for web, mobile, electron.'}
                             image={project3IMage}/>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
`
