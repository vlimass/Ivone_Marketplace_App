import React from "react";
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { Btn, BtnText, Container, ProfileName, ProfilePhoto } from "./Styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_300Light, Poppins_500Medium, Poppins_700Bold, Poppins_200ExtraLight} from '@expo-google-fonts/poppins';

import profilephoto from '../../assets/profilePhoto2.png';
import { useNavigation } from "@react-navigation/native";


interface ProfileInfo {
    name: string;
    photo: any;
}

export default function Navbar() {
    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        Poppins_400Regular, Poppins_600SemiBold, Poppins_300Light, Poppins_500Medium, Poppins_700Bold, Poppins_200ExtraLight
    });

    return(
        <Container>
            <ProfilePhoto source={profilephoto} />
            <ProfileName style={{fontFamily: "Poppins_400Regular"}}>Rochelle Rock</ProfileName>
            <Btn style={{borderTopWidth: 1.5}} onPress={() => navigation.navigate('ProfileScreen')}>
                <BtnText style={{fontFamily: "Poppins_400Regular"}}>Conta</BtnText>
                <Ionicons size={30}  name="chevron-forward-outline" color={"#586994"} />
            </Btn>
            <Btn>
                <BtnText style={{fontFamily: "Poppins_400Regular"}}>O que deseja fazer</BtnText>
                <Ionicons size={30}  name="chevron-forward-outline" color={"#586994"} />
            </Btn>
            <Btn>
                <BtnText style={{fontFamily: "Poppins_400Regular"}}>Histórico</BtnText>
                <Ionicons size={30}  name="chevron-forward-outline" color={"#586994"} />
            </Btn>
            <Btn style={{borderBottomWidth: 1.5}} onPress={() => navigation.navigate('MainMenu')}>
                <BtnText style={{fontFamily: "Poppins_400Regular"}}>Sair</BtnText>
                <Ionicons size={30}  name="chevron-forward-outline" color={"#586994"} />
            </Btn>
        </Container>
    )

}
