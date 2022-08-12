import styled, { css } from 'styled-components/native'
import theme from '../../global/styles/theme';

export const Container = styled.View`
    ${({theme}) => css`
        flex: 1;
        background-color: ${theme.colors.detail}
    `}
`;

export const Content = styled.View`
    height: 70%;
    justify-content: center;
    align-items: center;
`;

export const Footer = styled.View`
    ${({theme}) => css`
    justify-content: center;
    align-items: center
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    height: 30%;
    background-color: ${theme.colors.backgroundCard.pikachu};
    padding: 20px;
    `}
`;

export const Tittle = styled.Text`
    ${({theme}) => css`
        margin-top: 500px;
        font-size: 40px;
        color: ${theme.colors.white}
    `}
`;

export const SubTittle = styled.Text`
    ${({theme}) => css`
        margin-top: 20px;
        font-size: 18px;
        color: ${theme.colors.white}
    `}
`;