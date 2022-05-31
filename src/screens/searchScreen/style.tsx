import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";


export const Container = styled.View`
    display: flex;
    align-items: center;
    margin-top: ${hp('2.5%')};
`

export const ErrorContainer = styled.View`
    width: 86%;
    margin-top: ${hp('10%')};

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
`

export const ErrorTitle = styled.Text`
    font-size: 26px;
    text-align: center;
    margin-bottom: ${hp('1%')};
`

export const ErrorDescription = styled.Text`
    width: 50%;
    font-size: 14px;
    text-align: center;
    opacity: 0.5;
`