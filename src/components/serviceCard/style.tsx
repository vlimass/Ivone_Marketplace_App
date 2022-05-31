import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";

export const Container = styled.TouchableOpacity`
    width: ${wp('86%')};
    height: ${hp('25%')};
    margin-bottom: ${hp('2%')};
`

export const IconBtn = styled.TouchableOpacity`
    /* opacity: 0.5; */
    margin-top: ${hp('1%')};
    margin-left: ${hp('1%')};
`

export const BtnBackground = styled.ImageBackground`
    display: flex;
    justify-content: space-between;
`

export const BottomContainer = styled.View`
    display: flex;
    align-items: flex-end;
`

export const TxtContainer = styled.View`
    background-color: #CCC9DC;
    width:  ${wp('64%')};
    padding: 2px;

    display: flex;
    align-items: center;
    margin-bottom: ${hp('2%')};
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
`

export const ServiceName = styled.Text`
    color: #586994;
    font-size: 22px;
    text-align: center;
`
