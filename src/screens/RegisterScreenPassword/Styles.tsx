import styled from "styled-components/native";


export const ScreenContainer = styled.View`
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
`
export const QuestionArea = styled.View`
    padding: 10px 0;
    width: 100%;
`

export const CancelIcon = styled.TouchableOpacity`
    margin-top: 8%;

`

export const Question = styled.Text`
    width: 96%;
    color: #381D2A;
    font-size: 24px;
    text-align: left;
    margin: 10px;
`
export const Description = styled.Text`
    width: 80%;
    color: #586994;
    font-size: 17px;
    text-align: left;
    margin: 3px 10px;
`
export const NextButton = styled.TouchableOpacity`
    width: 100%;
    border-top-color: #C4C4C4;
    border-top-width: 1px;
    padding: 20px;
    text-align: center;
`
export const NextButtonText = styled.Text`
    color: #381D2A;
    font-size: 18px;
    text-align: center;
`

export const InputData = styled.TextInput`
    border-bottom-width: 1px; 
    border-bottom-color: #C4C4C4;
    font-size: 30px;
    padding: 3px 15px;
    width: 95%;
    margin: 15% auto;
`