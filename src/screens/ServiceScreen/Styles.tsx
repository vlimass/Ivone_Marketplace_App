import styled from "styled-components/native";

export const ScreenContainer = styled.View`
    align-items: center;
    background-color: #f4f4f6;
    height: 100%;
    font-family: 'Poppins';
    width: 100%;
`
export const Banner = styled.Image`
    width: 100%;
    height: 15%;
    opacity: 0.7;
`
export const ServiceContainer = styled.View`
    align-items: center;
    background-color: #CCC9DC;
    width: 100%;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    margin-top: -10px;
    padding-bottom: 250px;
`
export const ProfilePhoto = styled.Image`
    width: 200px;
    height: 200px;
    border-radius: 100px;
    margin-top: -100px;
`
export const ServiceName = styled.Text`
    font-size: 42px;
    color: #381D2A;
    margin-top: 25px;
    margin-bottom: -2px;
    width: 80%;
    text-align: center;
    line-height: 52px;
`
export const ProfileName = styled.Text`
    font-size: 24px;
    color: #586994;
    font-weight: 200;
`
export const AvaliationContainer = styled.View`
    margin-top: 5%;
    margin-bottom: 5%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
`
export const AvaliationCard = styled.View`
    flex-direction: column;
    align-items: center;
    margin: 5%;
    
`
export const AvaliationTitle = styled.Text`
    color: #381D2A;
    font-size: 29.13px;
`
export const AvaliationType = styled.Text`
    color: #381D2A;
    font-size: 19.75px;
`
export const PriceService = styled.Text`
    color: #FF6B6C;
    font-size: 57.33px;
    margin-bottom: 7%;
`
export const DescriptionContainer = styled.View`
    width: 100%;
    border-color:#381d2a48;
    border-top-width: 0.5px;
    padding: 20px;
    text-align: left;
    /* margin-top: 10%; */
`
export const DescriptionTitle = styled.Text`
    font-size: 27.33px;
    margin-bottom: 5px;
`

export const DescriptionText = styled.Text`
    font-size: 20px;
    color: #381D2A;
`

export const CommentInput = styled.TextInput`
    font-size: 22px;
    margin-top: 2%;
    margin-bottom: 1%;
    margin-left: 1%;
    width: 90%;
`