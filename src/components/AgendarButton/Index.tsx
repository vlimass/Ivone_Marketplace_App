import React from "react";
import { Button, EnterText } from "./Style";
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_300Light, Poppins_500Medium, Poppins_700Bold, Poppins_200ExtraLight} from '@expo-google-fonts/poppins';


export default function AgendarButton() {
    return(
        <Button>
            <EnterText style={{fontFamily: 'Poppins_400Regular'}}>Agendar</EnterText>
        </Button>
    )
}