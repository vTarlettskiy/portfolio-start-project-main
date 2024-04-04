import React from 'react';
import styled from "styled-components";

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
                <ViewProject href={'#'}>View Project</ViewProject>
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
`

const ProjectInfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ProjectName = styled.h3`

`

const ProjectDescription = styled.p`

`

const ViewProject = styled.a`

`

const ProjectImage = styled.img`
    height: 524px;
    object-fit: cover;
`



