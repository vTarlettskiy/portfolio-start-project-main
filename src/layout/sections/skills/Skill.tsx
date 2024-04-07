import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";

type StyledSkillPropsType = {
    iconId: string
}

export const Skill = (props: StyledSkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: calc(100% / 6);
    min-width: 150px;
    
`

