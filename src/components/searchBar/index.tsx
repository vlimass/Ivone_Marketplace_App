import React from "react";
import { TextInput, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import { SearchBarContainer, SearchBarInput } from "./style";
import { useNavigation } from "@react-navigation/native";
import { useValue } from "react-native-reanimated";

interface SearchBarInfo {
    icon: string;
    navigateTo: any;
    placeholder: string;
}

const SearchBar = ({icon, navigateTo, placeholder} : SearchBarInfo) => {
    const navigation = useNavigation();

    return(
        <SearchBarContainer>
            <SearchBarInput 
            placeholder={placeholder}
            placeholderTextColor={"#381D2A"}
            onSubmitEditing={() => navigation.navigate('SearchScreen')
            }
            />         

            <TouchableOpacity onPress={navigateTo}>
                <Ionicons size={26} name={icon}/>
            </TouchableOpacity>
        </SearchBarContainer>
    )
}

export default SearchBar;
