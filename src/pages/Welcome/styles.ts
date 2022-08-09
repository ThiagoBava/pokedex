import styled, { css } from 'styled-components/native'
import theme from '../../global/styles/theme';

export const Container = styled.View`
    ${({theme}) => css`
        felx: 1;
        background-color: ${theme.colors.background}
    `}
`;

export const Content = styled.View``;

export const Footer = styled.View``;