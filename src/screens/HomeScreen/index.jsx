import { View , Text} from "react-native-web";
import React from "react";
import {styles} from './style';



const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bem-Vindo ao meu app</Text>
        </View>
    );
}

export default HomeScreen;
