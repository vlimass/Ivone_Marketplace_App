import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenContainer, Input, InputData, InputIcon, LogoTop, LinkBtn, LinkText, SocialContainer, SocialCard, SocialIcon, SocialText, SocialTextContainer, Line, Signup, SignupText, SignupBtn, Icon, SignBtnText} from "./Styles";
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_300Light, Poppins_500Medium, Poppins_700Bold, Poppins_200ExtraLight} from '@expo-google-fonts/poppins';
import Ionicons from 'react-native-vector-icons/Ionicons';


import { useNavigation } from "@react-navigation/native";

//imagens
import logotop from "../../assets/logoname.png";
import iconPass from "../../assets/iconclosedeyes.png"
import googleIcon from "../../assets/googleicon.png";
import facebookIcon from "../../assets/facebookicon.png";
import appleIcon from "../../assets/appleicon.png";

//components
import EnterButton from "../../components/EnterButton/Index";


export default function LoginScreen() {
    const navigation = useNavigation();
    let [fontsLoaded] = useFonts({
        Poppins_400Regular, Poppins_600SemiBold, Poppins_300Light, Poppins_500Medium, Poppins_700Bold, Poppins_200ExtraLight
    });

    return (
        <SafeAreaView>
            <ScreenContainer>
                <LogoTop source={ logotop  } />
                <InputData>
                <Input placeholder="Email"/>
                </InputData>
                <InputData>
                <Input placeholder="Senha" secureTextEntry={true} />
                <InputIcon>
                    <Ionicons name='eye-off-outline' size={28} />
                </InputIcon>
                </InputData>
                <LinkBtn><LinkText>Esqueci minha senha.</LinkText></LinkBtn>
                <EnterButton text="Entrar" navigateTo={() => navigation.navigate('Home')}/>
                <SocialTextContainer>
                    <Line></Line>
                    <SocialText>Entrar como</SocialText>
                    <Line></Line>
                </SocialTextContainer>
            
                <SocialContainer>
                    <SocialCard><Ionicons size={35} name="logo-google"/></SocialCard>
                    <SocialCard><Ionicons size={35} name="logo-facebook"/></SocialCard>
                    <SocialCard><Ionicons size={35} name="logo-apple"/></SocialCard>
                </SocialContainer>
                <Signup>
                    <SignupText style={{fontFamily: "Poppins_500Medium"}}>Não tem conta? </SignupText>
                    <SignupBtn onPress={() => navigation.navigate('RegisterScreenCPF')}>
                        <SignBtnText style={{fontFamily: "Poppins_500Medium"}}>Cadastre-se</SignBtnText>
                     </SignupBtn>
                </Signup>
            </ScreenContainer>
        </SafeAreaView>
    )
}