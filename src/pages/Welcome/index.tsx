import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import pokemonAnimation from './pikachu.json'

import * as S from './styles'

export function Welcome(){
    return <S.Container>
    <S.Content>
            <AnimatedLottieView autoPlay source={pokemonAnimation} loop />
    </S.Content>
    <S.Footer>
        <S.Tittle>Bem Vindo</S.Tittle>
        <S.SubTittle>Encontre todos os Pokemons em um só lugar</S.SubTittle>
    </S.Footer>
    </S.Container>
}