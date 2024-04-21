import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

const skillData = [
    {
        iconId: 'icon1'
    },
    {
        iconId: 'icon2'
    },
    {
        iconId: 'icon3'
    },
    {
        iconId: 'icon4'
    },
    {
        iconId: 'icon5'
    },
    {
        iconId: 'icon6'
    },
    {
        iconId: 'icon7'
    },
    {
        iconId: 'icon8'
    },
    {
        iconId: 'icon9'
    },
    {
        iconId: 'icon10'
    },
    {
        iconId: 'icon11'
    },
    {
        iconId: 'icon12'
    },
]

export const Skills: React.FC = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-evenly'} gap={'74px 0'}>

                    {skillData.map((s, index) => {
                        return <Skill iconId={s.iconId} key={index}/>
                    })}

                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    position: relative;
`


