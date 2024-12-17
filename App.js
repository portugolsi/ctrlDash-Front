import React from 'react';
import { View, StyleSheet, Text, SafeAreaView,TouchableHighlight  } from 'react-native';
import Receitas from './components/receitas';
import Despesas from './components/despesas';
import Balanco from './components/balanco';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-web';

// https://static.enapter.com/rn/icons/material-community.html

export default function App() {
  return (
    <SafeAreaView style={styles.container}>



     <View style={styles.header}>
          <Icon name="cash-multiple" size={30} color="#000000" />
          <Text style={styles.headerText}>Ganho Mensal</Text>
      </View>
         
      {/* Card Meus Ganhos */}
      <View style={styles.card}>

          <View  style={styles.topCard}>
          <Text  style={styles.text}  >Meus Ganhos:</Text>

          <TouchableHighlight onPress={()=>{}}>
            <View>
                <Icon name='cash-plus' size={30} color="#fff" />
                
            </View>
          </TouchableHighlight>
          </View>

        
        <Receitas />
      </View>

      {/* Card Minhas Despesas */}
      <View style={styles.card}>
        <View style={styles.header}>
          <Icon name="credit-card-minus-outline" size={30} color="#FFFFFF" />
          <Text style={styles.headerText}>Minhas Despesas:</Text>
        </View>
        <Despesas />
      </View>

      {/* Card Balanço */}
      <View style={styles.card}>
        <View style={styles.header}>
          <Icon name="scale-balance" size={30} color="#000000" />
          <Text style={styles.headerText}>Balanço:</Text>
        </View>
        <Balanco />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '80%',
    backgroundColor: '#114A7E',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems:'flex-start',
    marginBottom: 10,
  },
  headerText: {
    color: '#114A7E',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  topCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '400',
  },
});
