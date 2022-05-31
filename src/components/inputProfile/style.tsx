import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";

export const Container = styled.View`
    width: 100%;
    align-items: flex-start;
    margin: 3% 0 0 10%;
`
export const TitleInput = styled.Text`
    width: 80%;
    text-align: left;
    margin-bottom: 0.5%;
`
export const Input = styled.TextInput`
    background-color: white;
    width: 85%;
    border: 1px #381d2a7f;
    border-radius: 10px;
    font-size: 18px;
    padding: 10px 12px;
`
