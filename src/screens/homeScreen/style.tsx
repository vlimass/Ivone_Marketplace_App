import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";

export const ScreenContainer = styled.View`
    display: flex;
    align-items: center;
`

export const Container = styled.View`
    width: ${wp('86%')};
    margin-bottom: ${hp('4%')};
`

export const Title = styled.Text`
    font-size: 32px;
    margin-bottom: ${hp('3%')};
`

export const ForYouCardContainer = styled.View`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`
