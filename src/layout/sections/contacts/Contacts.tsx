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
                        <Field as={'textarea'}/>
                    </StyledLabel>
                    <Button type={'submit'}>Send</Button>
                </StyledForm>
                <Socials/>
                <Copyright>Vadim Tarletskiy 2024 </Copyright>
            </FlexWrapper>
            <Image src={image}/>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  min-height: 100vh;
`

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`

const Field = styled.input`

`

const Copyright = styled.small`

`

const Image = styled.img`

`

