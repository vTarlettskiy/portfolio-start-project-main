import React from 'react';
import {DesktopMenu} from "./menu/desktopMenu/DesktopMenu";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {MobileMenu} from "./menu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles";

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const [width, setWidth] = React.useState(window.innerWidth)
    const breakpoint = 576

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize)

        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>

                    {width < breakpoint ? <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
                                        : <DesktopMenu/>}
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};





