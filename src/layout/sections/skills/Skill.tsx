import React from 'react';
import Icon from "../../../components/icon/Icon";
import styled from "styled-components";

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
  width: 16%;
`

