import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
        <View>
            
        </View>

        <View style={styles.headerRight}>
            <Text >Olá, usuário</Text>
            <Image style={styles.userImage}
                source={{  uri: 'https://reactnative.dev/img/tiny_logo.png'}}></Image>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    
    header:{
        justifyContent:'space-between',
        flexDirection: 'row',
        marginBottom: 20
    },

    userImage:{
        width: 30,
        height: 30,
        borderRadius: 30,
        marginRight: 30,
        marginLeft: 10,
    

    },
    headerRight:{
        flexDirection: 'row',
        alignItems: 'center',
    }

});
