import React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/Button";
import {theme} from "../../../styles/Theme";

type ProjectPropsType = {
    projectName: string
    description: string
    image: string

}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <ProjectInfoBlock>
                <ProjectName>{props.projectName}</ProjectName>
                <ProjectDescription>{props.description}</ProjectDescription>
                <Button as={'a'} href={'#'} btnType={'projects'}>View Project</Button>
            </ProjectInfoBlock>
            <ProjectImage src={props.image} alt={''}/>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    display: flex;
    width: 100%;
    max-width: 992px;
    max-height: 524px;
    border-radius: 24px;
    box-shadow: 0 6px 64px rgba(112, 144, 176, 0.10);
    overflow: hidden;
    margin-bottom: 80px;
    
    &:nth-child(even) {
        flex-direction: row-reverse;
        
        @media ${theme.media.tablet} {
            flex-direction: column-reverse;
        }
    }
    
    @media ${theme.media.tablet} {
        max-height: 1047px;
        flex-direction: column-reverse;
        margin-bottom: 50px;
    }
`

const ProjectInfoBlock = styled.div`
    width: 100%;
    padding: 0 40px 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media ${theme.media.tablet} {
        height: 524px;
      
    }
    
    
`

const ProjectName = styled.h3`
    font-family: Playfair Display, sans-serif;
    font-size: 40px;
    font-weight: Bold;
    line-height: 150%;
    white-space: nowrap;
`

const ProjectDescription = styled.p`
    font-size: 18px;
    line-height: 150%;
    margin: 24px 0;
`

const ProjectImage = styled.img`
    height: 524px;
    object-fit: cover;
    
    @media ${theme.media.tablet} {
        
    }
`



