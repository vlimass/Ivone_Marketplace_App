import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #f5f5f5;

    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 87%;
    z-index: 999;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
`
export const ProfilePhoto = styled.Image`
    width: 150px;
    height: 150px;
    border-radius: 100px;
    margin-top: 30%;
    margin-bottom: 3%;
`
export const ProfileName = styled.Text`
    color: #381D2A;
    font-weight: 100;
    font-size: 32px;
    margin-bottom: 10%;
`
export const Btn = styled.TouchableOpacity`
    border: 0.5px solid #381d2a;
    border-left-width: 0;
    border-right-width: 0;
    padding: 5% 5%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    margin: 0;
`
export const BtnText = styled.Text`
    font-size: 24px;
`