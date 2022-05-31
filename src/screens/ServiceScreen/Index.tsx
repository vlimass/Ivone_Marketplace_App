import React from "react";
import { AvaliationCard, AvaliationContainer, AvaliationTitle, AvaliationType, Banner, CommentInput, DescriptionContainer, DescriptionText, DescriptionTitle, PriceService, ProfileName, ProfilePhoto, ScreenContainer, ServiceContainer, ServiceName } from "./Styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_300Light, Poppins_500Medium, Poppins_700Bold, Poppins_200ExtraLight} from '@expo-google-fonts/poppins';

// Navigation
import { useNavigation } from "@react-navigation/native";

//imagens
import banner from "../../assets/banner.png";
import profilephoto from "../../assets/profilephoto.png";
import AgendarButton from "../../components/AgendarButton/Index";
import CommentView from "../../components/CommentView/Index";
import { ScrollView } from "react-native";
import { getId } from "../homeScreen";

// DATA
import { data } from '../../API'


export default function ServiceScreen() {
    const navigation = useNavigation();

    const id = getId();

    return (
        <ScrollView>
            <ScreenContainer >
                <Banner source={data[id].backgroundPhoto} />
                <ServiceContainer>
                    <ProfilePhoto source={data[id].profilePhoto}/>
                    <ServiceName  style={{fontFamily: "Poppins_600SemiBold"}}>{data[id].nameservice} </ServiceName>
                    <ProfileName  style={{fontFamily: "Poppins_300Light"}}> {data[id].nameprofile} </ProfileName>
                    <AvaliationContainer>
                        <AvaliationCard>
                            <AvaliationTitle> {data[id].services}</AvaliationTitle>
                            <AvaliationType  style={{fontFamily: "Poppins_300Light"}}>serviços</AvaliationType>
                        </AvaliationCard>
                        <AvaliationCard>
                            <AvaliationTitle> {data[id].serviceAvaliation}<Ionicons size={20}  name="star-outline"/> </AvaliationTitle>
                            <AvaliationType style={{fontFamily: "Poppins_300Light"}}>avaliações</AvaliationType>
                        </AvaliationCard>
                        <AvaliationCard>
                            <AvaliationTitle> {data[id].serviceLikes}<Ionicons size={20}  name="heart-outline"/> </AvaliationTitle>
                            <AvaliationType  style={{fontFamily: "Poppins_300Light"}}>gostei</AvaliationType>
                        </AvaliationCard>
                    </AvaliationContainer>
                    <PriceService style={{fontFamily: "Poppins_500Medium"}}>R$ {data[id].price}</PriceService>
                    <AgendarButton/>
                    <DescriptionContainer style={{marginTop: "15%"}}>
                        <DescriptionTitle  style={{fontFamily: "Poppins_600SemiBold"}}>Descrição</DescriptionTitle>
                        <DescriptionText style={{fontFamily: "Poppins_300Light"}}>{data[id].description}</DescriptionText>
                    </DescriptionContainer>
                    <DescriptionContainer>
                        <DescriptionTitle  style={{fontFamily: "Poppins_600SemiBold"}}>Comentários</DescriptionTitle>
                        <CommentInput placeholder="Adicionar comentário..." />
                    </DescriptionContainer >
                    <CommentView
                        profileName='Lázaro Ramos'
                        profilePhoto={require('../../assets/lazaroramos.png')}
                        commentText={`${data[id].nameservice} é surreal! Atendimento de primeira e um ambiente ótimo pra passar o tempo!`} />
                    <CommentView
                        profileName='Antônio Fagundes'
                        profilePhoto={require('../../assets/antoniofagunde.png')}
                        commentText="Esse lugar é brincadeira! Sem comentários, SÓ VAI" />
                    <CommentView
                        profileName='POZE MALVADAO'
                        profilePhoto={require('../../assets/poze.png')}
                        commentText='A parada é simplesmente muito boa. Fé!' />
                </ServiceContainer>
            </ScreenContainer>
        </ScrollView>
    )
}