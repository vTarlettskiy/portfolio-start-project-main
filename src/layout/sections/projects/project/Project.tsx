import React from 'react';
import {Button} from "../../../../components/Button";
import {S} from './Project_Styles'

type ProjectPropsType = {
    projectName: string
    description: string
    image: string

}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <S.ProjectInfoBlock>
                <S.ProjectName>{props.projectName}</S.ProjectName>
                <S.ProjectDescription>{props.description}</S.ProjectDescription>
                <Button as={'a'} href={'#'} btnType={'projects'}>View Project</Button>
            </S.ProjectInfoBlock>
            <S.ProjectImage src={props.image} alt={''}/>
        </S.Project>
    )
}





