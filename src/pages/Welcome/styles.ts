import styled, { css } from 'styled-components/native'
import theme from '../../global/styles/theme';

export const Container = styled.View`
    ${({theme}) => css`
        flex: 1;
        background-color: ${theme.colors.background}
    `}
`;

export const Content = styled.View`
    height: 70%;

`;

export const Footer = styled.View`
    ${({theme}) => css`
    justify-content: center;
    align-items: center
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    height: 30%;
    background-color: ${theme.colors.backgroundCard.water};
    `}
`;

export const Tittle = styled.Text`
    ${({theme}) => css`
        font-size: 20px;
        color: ${theme.colors.text}
    `}
`;

export const SubTittle = styled.Text`
    ${({theme}) => css`
        margin-top: 20px;
        font-size: 14px;
        color: ${theme.colors.text}
    `}
`;