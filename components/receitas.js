import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Receitas() {
  return (
   <View>
         <Text style={styles.text}>R$ 3000,00</Text>
       </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '80%',
    backgroundColor: '#114A7E',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
