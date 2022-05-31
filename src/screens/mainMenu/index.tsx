import React from "react";
import { Image, ImageBackground } from "react-native";
import background from '../../assets/backgroundMainMenu.png'
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_300Light, Poppins_500Medium, Poppins_700Bold, Poppins_200ExtraLight} from '@expo-google-fonts/poppins';

// NAVIGATION
import { useNavigation } from "@react-navigation/native";

// SCREENS
import EnterButton from "../../components/EnterButton/Index";
import { BottomContainer, GuestButton, GuestText, Logo, LogoContainer, ScreenContainer, Slogan, styles } from "./style";
import logoMenu from "../../assets/ivoneLogoMenu.png"

export default function MainMenu(){
    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        Poppins_400Regular, Poppins_600SemiBold, Poppins_300Light, Poppins_500Medium, Poppins_700Bold, Poppins_200ExtraLight
    });

    if (!fontsLoaded) {
        return AppLoading;
    }

    return(
        <ImageBackground source={background} resizeMode={"cover"} style={styles.img}>

            <ScreenContainer>

                <LogoContainer>
                    <Logo source={logoMenu} style={{width: 150, height: 45}}/>
                </LogoContainer>

                <BottomContainer>
                    <Slogan style={{fontFamily: 'Poppins_500Medium'}}>Faça o cabelo sem esquentar a cabeça</Slogan>

                    <EnterButton text="Entrar" navigateTo={() => navigation.navigate('LoginScreen')}/>

                    <GuestButton onPress={() => navigation.navigate('HomeGuest')}>
                        <GuestText style={{fontFamily: 'Poppins_500Medium'}}>Ir como convidado</GuestText>
                    </GuestButton>
                </BottomContainer>

            </ScreenContainer>

        </ImageBackground>
    )
}