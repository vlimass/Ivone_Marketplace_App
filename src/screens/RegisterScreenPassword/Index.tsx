import React from "react";
import { CancelIcon, Description, InputData, NextButton, NextButtonText, Question, QuestionArea, ScreenContainer} from "./Styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_300Light, Poppins_500Medium, Poppins_700Bold, Poppins_200ExtraLight} from '@expo-google-fonts/poppins';

import { useNavigation } from "@react-navigation/native";


export default function RegisterScreenPassword() {
    const navigation = useNavigation();

    return (
        <ScreenContainer>
            <QuestionArea>
                <CancelIcon onPress={() => navigation.goBack()}>
                    <Ionicons size={50}  name="close-outline"/>
                </CancelIcon>
                <Question style={{fontFamily: "Poppins_600SemiBold"}}>Pode nos informar uma senha beeem segura?</Question>
                <Description style={{fontFamily: "Poppins_300Light"}}>Insira sua senha para darmos proseeguimento ao cadastro.</Description>
                <InputData secureTextEntry={true}/>
            </QuestionArea>
            
            <NextButton onPress={() => navigation.navigate('RegisterScreenPasswordConf')}>
                <NextButtonText style={{fontFamily: 'Poppins_500Medium'}}>CONTINUAR</NextButtonText>
            </NextButton>
        </ScreenContainer>
    )
}