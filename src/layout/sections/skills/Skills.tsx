import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                <Skill iconId='icon1'/>
                <Skill iconId='icon2'/>
                <Skill iconId='icon3'/>
                <Skill iconId='icon4'/>
                <Skill iconId='icon5'/>
                <Skill iconId='icon6'/>
                <Skill iconId='icon7'/>
                <Skill iconId='icon8'/>
                <Skill iconId='icon9'/>
                <Skill iconId='icon10'/>
                <Skill iconId='icon11'/>
                <Skill iconId='icon12'/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  min-height: 100vh;
`


