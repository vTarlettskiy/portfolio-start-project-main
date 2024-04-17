import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contact me</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'}>
                    <StyledForm>
                        <StyledLabel>
                            Name
                            <Field/>
                        </StyledLabel>
                        <StyledLabel>
                            Email
                            <Field type={'email'}/>
                        </StyledLabel>
                        <StyledLabel>
                            Message
                            <Field as={'textarea'} height={'160px'} />
                        </StyledLabel>
                        <Button type={'submit'} btnType={'primary'} btnAlign={'end'}>Send</Button>
                    </StyledForm>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    height: auto;
`

const StyledForm = styled.form`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    
`

const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-weight: bolder;
`

type FieldPropsType = {
    height?: string
}

const Field = styled.input<FieldPropsType>`
    margin-bottom: 24px;
    border: 1px solid #E8ECF4;
    border-radius: 8px;
    min-height: 40px;
    height: ${props => props.height || '40px'};
    resize: none;
`



// const Image = styled.img`
//     position: relative;
//     top: -130px;
//     width: 100%;
// `

