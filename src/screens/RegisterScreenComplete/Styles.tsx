import styled from "styled-components/native";


export const ScreenContainer = styled.View`
    align-items: center;
    justify-content: space-between;
    height: 100%;
    font-family: 'Poppins';
`

export const Title = styled.Text`
    font-weight: bold;
    font-size: 42px;
    color: #381D2A;
    margin-bottom: 1%;
`
export const SubTitle = styled.Text`
    font-size: 20px;
    color: #586994;
    text-align: center;
    width: 250px;
`
export const TextArea = styled.View`
    display: flex ;
    align-items: center;
    justify-content: center;
    margin-top: 70%;
`
export const NextButton = styled.TouchableOpacity`
    width: 100%;
    border-bottom-color: #C4C4C4;
    border-bottom-width: 1px;
    border-top-width: 1px;
    padding: 20px;
    text-align: center;
`
export const NextButtonText = styled.Text`
    color: #381D2A;
    font-size: 18px;
    text-align: center;
`