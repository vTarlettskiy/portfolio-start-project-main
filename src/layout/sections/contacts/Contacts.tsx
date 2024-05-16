import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from './Contacts_Styles'

export const Contacts: React.FC = () => {
    return (
        <S.Contacts name={'contacts'}>
            <Container>
                <SectionTitle>Contact me</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'}>
                    <S.Form>
                        <S.Label>
                            Name
                            <S.Field/>
                        </S.Label>
                        <S.Label>
                            Email
                            <S.Field type={'email'}/>
                        </S.Label>
                        <S.Label>
                            Message
                            <S.Field as={'textarea'} height={'160px'} />
                        </S.Label>
                        <Button type={'submit'} btnType={'primary'} btnAlign={'end'}>Send</Button>
                    </S.Form>
                </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};
