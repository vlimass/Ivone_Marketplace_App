import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";

export const Container = styled.View`
    background-color: #381D2A;
    height: ${hp('11%')};

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5%;
    width: 100%;
`

export const Content = styled.View`
    width: 100%;
    margin-top: ${hp('3.5%')};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const NavBarText = styled.Text`
    font-size: 50px;
    font-weight: 600;
    color: #CCC9DC;
`