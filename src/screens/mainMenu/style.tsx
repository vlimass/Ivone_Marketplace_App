import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%'
    },
})

export const ScreenContainer = styled.View `
    flex: 1;
    align-items: center;
    justify-content: space-between;
`

export const LogoContainer = styled.View`
    margin-top: ${hp('9%')};
`
export const Logo = styled.Image`
    height: 50px;
    width: 200px;
    margin-top: -5px;
`

export const BottomContainer = styled.View`
    width: ${wp('90%')};
    margin-bottom: ${hp('7%')};
    display: flex;
    align-items: center;
`

export const Slogan = styled.Text`
    color: #F5F5F5;
    font-size: 31px;
    width: ${wp('90%')};
    margin-left: 9%;
    margin-bottom: ${hp('3%')};
    text-align: left;
`

export const GuestButton = styled.TouchableOpacity`
    margin-top: ${hp('2%')};
`

export const GuestText = styled.Text`
    color: #381D2A;
    font-size: 20px;
    font-weight: 500;
    text-decoration: underline;
    text-decoration-color: #381D2A;
`

