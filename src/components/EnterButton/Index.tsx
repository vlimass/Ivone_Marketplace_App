import React from "react";
import { Button, EnterText } from "./Style";
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_300Light, Poppins_500Medium, Poppins_700Bold, Poppins_200ExtraLight} from '@expo-google-fonts/poppins';


interface InputData {
    text: string;
    navigateTo?: any;
}

export default function EnterButton({text, navigateTo}:InputData) {
    return(
        <Button onPress={navigateTo}>
            <EnterText style={{fontFamily: "Poppins_400Regular"}}>{text}</EnterText>
        </Button>
    )
}