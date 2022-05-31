import styled from "styled-components/native";


export const Container = styled.View`
    width: 100%;
    padding: 3%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    border-color:#381d2a48;
    border-top-width: 0.5px;
`
export const TextArea = styled.View`
    text-align: left;
    max-width: 80%;
`
export const ProfilePhoto = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-right: 2%;
`

export const ProfileName = styled.Text`
    font-size: 20px;
    font-weight: bold;    
`
export const CommentText = styled.Text`
    font-size: 20px;
`