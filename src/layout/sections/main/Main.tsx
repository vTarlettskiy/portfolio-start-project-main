import React from 'react';
import bg from '../../../assets/images/yellow-bg.webp';
import photo from '../../../assets/images/photo.webp';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Button} from "../../../components/Button";
import {S} from './Main_Styles';
import Typewriter from 'typewriter-effect';


export const Main: React.FC = () => {
    return (
        <S.Main name={'main'}>
            <Container  >
                <FlexWrapper align={'flex-end'} justify={'space-between'} wrap={'wrap-reverse'}>
                    <S.InfoBlock>
                        <S.MainTitle>
                            <p>Software Developer</p>
                            <Typewriter
                                options={{
                                    strings: ['Software Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </S.MainTitle>
                        <S.Greetings>Hello, my name<br/> is Vahid Navazan</S.Greetings>
                        <S.About>Short text with details about you, what you do or your professional career. You can
                            add
                            more information on the about page.</S.About>
                        <S.ButtonBlock>
                            <Button btnType={'primary'}>Projects</Button>
                            <Button btnType={'secondary'}>LinkedIn</Button>
                        </S.ButtonBlock>
                    </S.InfoBlock>

                    <S.PhotoContainer>
                        <S.Photo src={photo} alt=''/>
                        <S.PhotoBG src={bg} alt=''/>
                    </S.PhotoContainer>

                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

