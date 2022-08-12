import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
    ${({theme}) => css`
        width: 100%;
        height: 50px;
        background-color: ${theme.colors.detail}
        border-radius: 20px;
        justify-content: center;
        align-items: center;
    `}    
`;

export const Tittle = styled.Text`
    ${({theme}) => css`
        font-size: 18px;
        color: ${theme.colors.white}
    `}
`;