import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import pokemonAnimation from './pikachu.json'
import {ViewPropTypes} from 'deprecated-react-native-prop-types';
import * as S from './styles'
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';


export function Welcome(){
    const {navigate}  = useNavigation()
    function handleNavigation(){
        navigate('Home')
    }

    return <S.Container>
    <S.Content>
            <AnimatedLottieView autoPlay source={pokemonAnimation} loop />

            <S.Tittle>Bem Vindo</S.Tittle>
            <S.SubTittle>Encontre todos os Pokemons em um só lugar</S.SubTittle>
    </S.Content>
    <S.Footer>
        <Button tittle='Iniciar' onPress={handleNavigation} />
    </S.Footer>
    </S.Container>
}