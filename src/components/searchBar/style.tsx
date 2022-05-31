import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";

export const SearchBarContainer = styled.View`
    width: ${wp('86%')};
    border: solid  0.5px;
    border-radius: 20px;
    padding: 2.5% 4%;
    opacity: 0.5;
    margin-bottom: ${hp('2%')};
    margin-top: ${hp('3%')};
    background-color: transparent;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const SearchBarInput = styled.TextInput`
    font-size: 18px;
    width: 80%;
`
