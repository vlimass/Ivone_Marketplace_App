import React from "react";
import { View, Text, ImageBackground, TouchableOpacity} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_300Light, Poppins_500Medium, Poppins_700Bold, Poppins_200ExtraLight} from '@expo-google-fonts/poppins';

import { BottomContainer, BtnBackground, Container, IconBtn, Price, PriceContainer, ServiceName, TxtContainer } from "./style";


interface ForYouCardInfo {
    serviceName: string;
    img: any;
    price: string;
    isFavourite: boolean;
    navigateTo?: any;
}

const ForYouCard = ({serviceName, img, price, isFavourite, navigateTo} : ForYouCardInfo) => {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular, Poppins_600SemiBold, Poppins_300Light, Poppins_500Medium, Poppins_700Bold, Poppins_200ExtraLight
    });

    // if (!fontsLoaded) {
    //     return AppLoading;
    // }

    // Verifica se o serviço está favoritado
    let favouriteIcon
    isFavourite?  favouriteIcon = "heart" : favouriteIcon = "heart-outline";

    return(
        <Container onPress={navigateTo}>
            <BtnBackground source={img} resizeMode={"cover"} style={{width: '100%', height: '100%'}} imageStyle={{ borderRadius: 10}}>
                <IconBtn>
                    <Ionicons size={36} color={"#586994"} name={favouriteIcon}/>
                </IconBtn>
        
                <BottomContainer>
                    <PriceContainer>
                        <Price style={{fontFamily: 'Poppins_500Medium'}}>R$ {price}</Price>
                    </PriceContainer>

                    <TxtContainer>
                        <ServiceName style={{fontFamily: 'Poppins_500Medium'}}>{serviceName}</ServiceName>
                    </TxtContainer>
                </BottomContainer>
           </BtnBackground>
        </Container>
    )
}

export default ForYouCard;