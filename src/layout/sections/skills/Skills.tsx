import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./Skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-evenly'} rowGap={'74px'}>
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
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 100vh;
`


