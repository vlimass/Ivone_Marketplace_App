import React, { useState } from "react";
import { View, Image, TouchableOpacity} from 'react-native';
import { Container, Content } from "./style";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Navbar from "../navbar/Index";


export default function Header() {
    const [visible, setVisible] = useState<boolean>(false)

    const openNavbar = () => {
        setVisible(true)
    }

    return(
        <>
            {visible && <Navbar/>}

            <Container>    
                <Content>
                    <TouchableOpacity onPress={() => openNavbar()}>
                        <Ionicons size={38} name="ellipsis-horizontal" color={"#CCC9DC"}/>
                    </TouchableOpacity>

                    <View>
                        <Image source={require('../../assets/logoHome.png')} width={30} height={30} style={{width: 35, height: 35}}/>
                    </View>
                </Content>
            </Container>
        </>
    )
}