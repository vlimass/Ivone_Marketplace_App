import { disableExpoCliLogging } from "expo/build/logs/Logs";
import React from "react";
import { View, Text } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_300Light, Poppins_500Medium, Poppins_700Bold, Poppins_200ExtraLight} from '@expo-google-fonts/poppins';

import SearchBar from "../../components/searchBar";
import ServiceCard from "../../components/serviceCard";
import { Container, ErrorContainer, ErrorDescription, ErrorTitle } from "./style";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

// DATA
import { data } from "../../API";


export default function SearchScreen() {
    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        Poppins_400Regular, Poppins_600SemiBold, Poppins_300Light, Poppins_500Medium, Poppins_700Bold, Poppins_200ExtraLight
    });

    // if (!fontsLoaded) {
    //     return AppLoading;
    // } 
    
    // Verifica se foi encontrada alguma busca
    let isEmpty = false;

    return(
        <Container>
            <SearchBar icon="close-outline" navigateTo={() => navigation.goBack()} placeholder=""/>

                <ScrollView>
                    { !isEmpty &&
                    <View>
                        <ServiceCard serviceName={data[2].nameservice} img={data[2].backgroundPhoto} isFavourite={data[2].isFavourite}/>
                
                    </View> }
                </ScrollView>


                { isEmpty &&
                <ErrorContainer>
                    <ErrorTitle style={{fontFamily: "Poppins_500Medium"}}>Que pena! Resultado não encontrado :(</ErrorTitle>
                    <ErrorDescription style={{fontFamily: "Poppins_400Regular"}}>Tente buscar por outro salooner ou serviço.</ErrorDescription>
                </ErrorContainer> }

        </Container>
    )
}