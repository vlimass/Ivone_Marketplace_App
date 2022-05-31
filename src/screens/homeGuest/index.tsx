import React, { useDebugValue, useEffect, useState } from "react";
import { Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity} from "react-native";
import Header from "../../components/header";
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_300Light, Poppins_500Medium, Poppins_700Bold, Poppins_200ExtraLight} from '@expo-google-fonts/poppins';

// SCREENS
import { ScreenContainer, Title, Container, ForYouCardContainer } from "./style";
import TrendingCard from "../../components/trendingCard";
import ScheduleCard from "../../components/scheduleCard";
import ServiceCard from "../../components/serviceCard";
import ForYouCard from "../../components/forYouCard";
import SearchBar from "../../components/searchBar";

// NAVIGATION
import { useNavigation } from "@react-navigation/native";
import Navbar from "../../components/navbar/Index";
import { StatusBar } from "expo-status-bar";

// DATA
import  { data } from "../../API"

// ID
let id = 1;

export default function HomeGuest(){
    const [header, setHeader] = useState<boolean>(false)
    const navigation = useNavigation();
    
    useEffect(() => {
        setTimeout(() => {
            if(header) setHeader(false)
        }, 4000)
    }, [header])

    let [fontsLoaded] = useFonts({
        Poppins_400Regular, Poppins_600SemiBold, Poppins_300Light, Poppins_500Medium, Poppins_700Bold, Poppins_200ExtraLight
    });

    // if (!fontsLoaded) {
    //     return AppLoading;
    // }

    return(
        <>
            <ScrollView horizontal={false}> 

                <ScreenContainer onTouchMove={() => {setHeader(true)}}>
                    <SearchBar icon="search-outline" navigateTo={() => navigation.navigate('SearchScreen')} placeholder="Pesquise por um salooner"/>

                    <Container style={{marginBottom: "10%"}}>
                        <Title style={{fontFamily: "Poppins_600SemiBold"}}>Destaques</Title>
                        
                        <ScrollView 
                        horizontal={true}  
                        showsHorizontalScrollIndicator={false}>
                            <TrendingCard img={require('../../assets/trendingImg1.png')}/>
                            <TrendingCard img={require('../../assets/trendingImg2.png')}/>
                        </ScrollView>     
                    </Container>


                    <Container>
                        <Title style={{fontFamily: "Poppins_600SemiBold"}}>Para você</Title>

                        <ForYouCardContainer>
                            <ForYouCard serviceName={data[0].nameservice} img={data[0].backgroundPhoto} price={data[0].price} isFavourite={false}/>

                            <ForYouCard serviceName={data[1].nameservice} img={data[1].backgroundPhoto} price={data[1].price} isFavourite={false} navigateTo={() => {id = 1; getIdGuest(); navigation.navigate('ServiceScreen')}}/>

                            <ForYouCard serviceName={data[2].nameservice} img={data[2].backgroundPhoto} price={data[2].price} isFavourite={false}/>

                            <ForYouCard serviceName={data[3].nameservice} img={data[3].backgroundPhoto} price={data[3].price} isFavourite={false} navigateTo={() => {id = 3; getIdGuest(); navigation.navigate('ServiceScreen')}}/>
                           
                        </ForYouCardContainer>
                    </Container>
                </ScreenContainer>

            </ScrollView>
        </>
    )
}

export function getIdGuest() {
    return id;
}