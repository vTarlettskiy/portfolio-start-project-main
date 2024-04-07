import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Socials} from "./Socials";
import {FlexWrapper} from "../../../components/FlexWrapper";
import image from '../../../assets/images/image-5.webp'
import {Button} from "../../../components/Button";

export const Contacts = () => {
    return (
        <StyledContacts>
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
                <Socials/>
                <Copyright>Vadim Tarletskiy 2024 </Copyright>
                <Image src={image}/>
            </FlexWrapper>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    height: 600px;
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

const Copyright = styled.small`

`

const Image = styled.img`
    position: relative;
    top: -100px;
    width: 100%;
`

