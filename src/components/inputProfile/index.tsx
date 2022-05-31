import React from "react";
import { Container, Input, TitleInput } from "./style";

interface InputData {
    placeHouder: string;
    type: boolean;
    description: string;
}

const InputProfile = ({placeHouder,type,description}: InputData) => {
    
    return(
        <Container>
            <TitleInput>{description}</TitleInput>
            <Input placeholder={placeHouder} secureTextEntry={type}/>
        </Container>
    )
}

export default InputProfile;
