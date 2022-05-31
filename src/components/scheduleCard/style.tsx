import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";


export const BtnContainer = styled.TouchableOpacity`
    background-color: #CCC9DC;
    box-shadow: 2px 2px #381d2a59;
    width: ${wp('86%')};
    height: ${hp('14%')};
    border-radius: 5px;
    margin-bottom: ${hp('2%')};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const LeftSection = styled.View`
    background-color: #E5E2E2;
    
    width: ${wp('50%')};
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ServiceName = styled.Text`
    color: #381D2A;
    font-size: 20px;
    margin-top: ${hp('1%')};
    text-align: center;
`

export const DateTime = styled.Text`
    font-size: 16px;
    margin-bottom: ${hp('1%')};
`

export const RightSection = styled.View`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`

export const TrashButton = styled.TouchableOpacity`
    margin-top: ${hp('1%')};
    margin-right: ${wp('3%')};
    opacity: 0.5;
`

export const Price = styled.Text`
    font-size: 24px;
    color: #586994;

    margin-bottom: ${hp('0.5%')};
    margin-right: ${wp('3%')};
`