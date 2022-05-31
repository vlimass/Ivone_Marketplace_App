import React from "react";
import { Image, TouchableOpacity } from "react-native";

interface TrendingCardInfo {
    img: any;
    navigate?: any;
}

const TrendingCard= ({img, navigate} : TrendingCardInfo) => {
    return(
        <TouchableOpacity onPress={navigate} style={{marginRight: 15}}>
            <Image source={img} width={100} height={100} style={{width: 285}}/>
        </TouchableOpacity>
    )
}

export default TrendingCard;