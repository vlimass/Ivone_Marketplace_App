import React from "react";
import { CancelIcon, Description, InputData, NextButton, NextButtonText, Question, QuestionArea, ScreenContainer} from "./Styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_300Light, Poppins_500Medium, Poppins_700Bold, Poppins_200ExtraLight} from '@expo-google-fonts/poppins';


import { useNavigation } from "@react-navigation/native";


export default function RegisterScreenName() {
    const navigation = useNavigation();

    return (
        <ScreenContainer>
            <QuestionArea>
                <CancelIcon onPress={() => navigation.goBack()}>
                    <Ionicons size={50}  name="close-outline"/>
                </CancelIcon>
                <Question style={{fontFamily: "Poppins_600SemiBold"}}>Que bom que começou! Qual é o seu nome?</Question>
                <Description style={{fontFamily: "Poppins_300Light"}}>Insira seu nome para darmos prosseguimento ao cadastro.</Description>
                <InputData />
            </QuestionArea>
            
            <NextButton onPress={() => navigation.navigate('RegisterScreenBirthday')}>
                <NextButtonText style={{fontFamily: "Poppins_500Medium"}}>CONTINUAR</NextButtonText>
            </NextButton>
        </ScreenContainer>
    )
}