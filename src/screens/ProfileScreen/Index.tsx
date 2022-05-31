import React from "react";
import { ConfigTitle, EditAccount, EditButton, PhotoContainer, ProfilePhoto, ScreenContainer, TitleScreen, AlertView, AlertImage, AlertText } from "./Styles";
import Ionicons from "react-native-vector-icons/Ionicons";


import profilePhoto from "../../assets/profilePhoto2.png";
import alert from '../../assets/alert.png';
import { Title } from "../RegisterScreenComplete/Styles";
import Header from "../../components/header";
import InputProfile from "../../components/inputProfile";
import { ScrollView } from "react-native-gesture-handler";

import EnterButton from "../../components/EnterButton/Index";
 
export default function ProfileScreen() {
    return (
        <ScrollView>
            <ScreenContainer>
                <EditAccount>Editar Conta</EditAccount>
                <PhotoContainer>
                    <ProfilePhoto source={profilePhoto} />
                    <EditButton><Ionicons size={25}  name="brush-outline"/></EditButton>
                </PhotoContainer>
                <TitleScreen>Detalhes da conta</TitleScreen>
                <InputProfile placeHouder="rochelle@ejcm.com" description="Email" type= {false}/>
                <InputProfile placeHouder="************" description="Senha" type= {true}/>
                <InputProfile placeHouder="Bedford-Stuyvesant, NY" description="Endereço" type= {false}/>
                <ConfigTitle>Configuração de atuação</ConfigTitle>
                <AlertView>
                    <AlertImage source={alert} />
                    <AlertText>Essa conta é de cliente. Deseja entrar como salooner?</AlertText>
                    <EnterButton text='Seja Salooner'/>
                </AlertView>
            </ScreenContainer>
        </ScrollView>
    )
}
