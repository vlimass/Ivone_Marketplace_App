import React from "react";
import { NextButton, NextButtonText, ScreenContainer, TextArea, Title, SubTitle} from "./Styles";
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_300Light, Poppins_500Medium, Poppins_700Bold, Poppins_200ExtraLight} from '@expo-google-fonts/poppins';

import { useNavigation } from "@react-navigation/native";


export default function RegisterScreenComplete() {
    const navigation = useNavigation();

    return (
        <ScreenContainer>
            <TextArea>
                <Title style={{fontFamily: "Poppins_700Bold"}}>Tudo pronto! </Title>
                <SubTitle style={{fontFamily: "Poppins_600SemiBold"}}>Cadastro finalizado com sucesso!</SubTitle>
            </TextArea>
            
            <NextButton onPress={() => navigation.navigate('Home')}>
                <NextButtonText style={{fontFamily: "Poppins_600SemiBold"}}>COMEÇAR ></NextButtonText>
            </NextButton>
        </ScreenContainer>
    )
}