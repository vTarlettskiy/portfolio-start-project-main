import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from './Footer_Styles'

const SocialItemsData = [
    {
        iconId: 'icon13',
        height: '38px',
        width: '38px',
        viewBox: 'border-box',
    },
    {
        iconId: 'icon14',
        height: '38px',
        width: '38px',
        viewBox: 'border-box',
    },
    {
        iconId: 'icon15',
        height: '48px',
        width: '48px',
        viewBox: 'border-box',
    },
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={'column'} align={'center'} justify={'center'}>
                <S.SocialList>

                    {SocialItemsData.map((s, index) => {
                        return (
                            <S.SocialItem>
                                <S.SocialLink>
                                    <Icon iconId={s.iconId} height={s.height} width={s.width} viewBox={s.viewBox}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}

                </S.SocialList>
                <S.Copyright>Vadim Tarletskiy 2024 </S.Copyright>
            </FlexWrapper>
        </S.Footer>
    )
}

