import React from "react";
import { View, Text, Touchable, TouchableOpacity} from "react-native";
import { BtnContainer, DateTime, LeftSection, ServiceName, TrashButton, Price, RightSection } from "./style";
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_300Light, Poppins_500Medium, Poppins_700Bold, Poppins_200ExtraLight} from '@expo-google-fonts/poppins';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

interface ScheduleCardInfo {
    serviceName: string;
    date: any;
    time: any;
    price: string;
    navigateTo?: any; 
}

const ScheduleCard = ({serviceName, date, time, price, navigateTo, sendId} : ScheduleCardInfo) => {
    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        Poppins_400Regular, Poppins_600SemiBold, Poppins_300Light, Poppins_500Medium, Poppins_700Bold, Poppins_200ExtraLight
    });

    // if (!fontsLoaded) {
    //     return AppLoading;
    // }

    return(
        <BtnContainer onPress={navigateTo}>
            <LeftSection>
                <ServiceName style={{fontFamily: 'Poppins_400Regular'}}>{serviceName}</ServiceName>
                
                <DateTime style={{fontFamily: 'Poppins_300Light'}}>{date}  {time}</DateTime>
            </LeftSection>

            <RightSection>
                <TrashButton>
                    <Ionicons size={29}  name="trash"/>
                </TrashButton>

                <Price style={{fontFamily: 'Poppins_500Medium'}}>R$ {price}</Price>
            </RightSection>
        </BtnContainer>
    )
}


export default ScheduleCard;