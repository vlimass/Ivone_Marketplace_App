import React from "react";
import { CommentText, Container, ProfileName, ProfilePhoto, TextArea } from "./Style";
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_300Light, Poppins_500Medium, Poppins_700Bold, Poppins_200ExtraLight} from '@expo-google-fonts/poppins';


import photo from '../../assets/profilephoto.png';

interface CommentData {
    profilePhoto: any;
    profileName: string;
    commentText: string;
}

export default function CommentView({profilePhoto, profileName, commentText} : CommentData) {
    return(
        <Container>
            <ProfilePhoto source={profilePhoto}/>
            <TextArea>
                <ProfileName style={{fontFamily: "Poppins_700Bold"}}>{profileName}</ProfileName>
                <CommentText style={{fontFamily: "Poppins_300Light"}}>{commentText}</CommentText>
            </TextArea>
        </Container>
    )
}