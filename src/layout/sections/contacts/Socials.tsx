import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";


export const Socials = () => {
    return (
        <StyledSocials>
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={'icon13'} height={'38px'} width={'38px'} viewBox={'border-box'}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={'icon14'} height={'38px'} width={'38px'} viewBox={'border-box'}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={'icon15'} height={'48px'} width={'48px'} viewBox={'border-box'}/>
                    </SocialLink>
                </SocialItem>
            </SocialList>
        </StyledSocials>
    );
};

const StyledSocials = styled.div`
    
`

const SocialList = styled.ul`
    list-style: none;
    display: flex;
    gap: 25px;
    margin: 56px 0 32px 0;
    
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`

`




