import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";

export const Container = styled.TouchableOpacity`
    width: ${wp('40%')};
    height: ${hp('22.5%')};
    margin-bottom: 8%;
    box-shadow: 2px 2px #381d2a59;
`

export const BtnBackground = styled.ImageBackground`
    display: flex;
    justify-content: space-between;

`

export const IconBtn = styled.TouchableOpacity`

    margin-top: ${hp('1%')};
    margin-left: ${hp('1%')};
`

export const BottomContainer = styled.View`
    display: flex;
    align-items: flex-end;
`

export const PriceContainer = styled.View`
    background-color:#586994;    
    padding: 1px 5px;
    border-top-left-radius: 10px;

`

export const Price = styled.Text`
    color: #CCC9DC;
    font-size: 18px;
    text-align: center;
`

export const TxtContainer = styled.View`
    background-color: #CCC9DC;
    padding: 2px;
    width: 100%;

    display: flex;
    align-items: flex-end;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

export const ServiceName = styled.Text`
    color: #586994;
    font-size: 20px;
    text-align: right;
`
