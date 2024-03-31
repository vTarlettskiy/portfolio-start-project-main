import React from 'react';
import styled from "styled-components";
import Icon from "../../../components/icon/Icon";

export const Socials = () => {
    return (
        <StyledSocials>
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={'icon13'}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={'icon14'}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={'icon15'}/>
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
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`

`




