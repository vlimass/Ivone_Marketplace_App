import React from "react";
import { CancelIcon, Description, InputData, NextButton, NextButtonText, Question, QuestionArea, ScreenContainer} from "./Styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_300Light, Poppins_500Medium, Poppins_700Bold, Poppins_200ExtraLight} from '@expo-google-fonts/poppins';

import { useNavigation } from "@react-navigation/native";


export default function RegisterScreenPasswordConf() {
    const navigation = useNavigation();

    return (
        <ScreenContainer>
            <QuestionArea>
                <CancelIcon onPress={() => navigation.goBack()}>
                    <Ionicons size={50}  name="close-outline"/>
                </CancelIcon>
                <Question style={{fontFamily: "Poppins_600SemiBold"}}>Só mais uma vez pra gente confimar.</Question>
                <Description style={{fontFamily: "Poppins_300Light"}}>Insira novamente a senha digitada na última sessão.</Description>
                <InputData secureTextEntry={true}/>
            </QuestionArea>
            
            <NextButton onPress={() => navigation.navigate('RegisterScreenComplete')}>
                <NextButtonText style={{fontFamily: "Poppins_500Medium"}}>CONTINUAR</NextButtonText>
            </NextButton>
        </ScreenContainer>
    )
}