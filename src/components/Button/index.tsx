import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from './style'

type Props = {
    tittle: string;
} & TouchableOpacityProps

export function Button({tittle}: Props){
    return <S.Container>
        <S.Tittle>{tittle}</S.Tittle>
    </S.Container>
}