import styled from "styled-components/native";

export const ScreenContainer = styled.View`
    align-items: center;
    min-height: 100%;
    background-color: #f5f5f5;
    width: 100%;
`

export const EditAccount = styled.Text`
    font-size: 30px;
    margin: 5% 0 7% 0;
    font-weight: 700;
`
export const PhotoContainer = styled.View`
    align-items: flex-end;
`
export const ProfilePhoto = styled.Image`
    height: 150px;
    width: 150px;
    border-radius: 100px;
`
export const EditButton = styled.TouchableOpacity`
    background-color: #CCC9DC;
    padding: 1%;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin-top: -10%;
`
export const TitleScreen = styled.Text`
    font-size: 22px;
    width: 100%;
    font-weight: 200;
    text-align: left;
    margin-top: 10%;
    margin-left: 10%;
    margin-bottom: 3%;

`
export const ConfigTitle = styled.Text`
    font-size: 22px;
    width: 100%;
    font-weight: 200;
    text-align: left;
    margin-left: 12%;
    margin-bottom: 3%;
    margin-top: 10%;
`
export const AlertView = styled.View`
    align-items: center;
    justify-content: center;
    margin-bottom: 10%;
`
export const AlertImage = styled.Image`
    opacity: 0.8;
    height: 120px;
    width: 100px;
    margin: 30px 0 15px 0;
`
export const AlertText = styled.Text`
    opacity: 0.5;
    width: 180px;
    text-align: center;
    margin-bottom: 8%;
`
