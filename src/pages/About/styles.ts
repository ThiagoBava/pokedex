import styled, { css } from "styled-components";
import * as React from 'react';
import { TypeName } from ".";


type TypeProps = {
    type: TypeName
}

export const Header = styled.View<TypeProps>`
    ${({theme, type}) => css`
        background-color: ${theme.colors.backgroundCard[type]};
        height: 340px;
        padding: 20px;
        flex-direction: row;
        align-items: center;

        position: relative;
    `}
`

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: 50px;
    left: 40px;
`;