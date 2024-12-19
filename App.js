import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableHighlight, useWindowDimensions } from 'react-native';
import Receitas from './components/receitas';
import Despesas from './components/despesas';
import Balanco from './components/balanco';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from './components/header';

export default function App() {
  const { width, height } = useWindowDimensions(); // Captura as dimensões da tela

  // Ajuste do estilo responsivo, com base no tamanho da tela
  const isSmallScreen = width < 375; // Condição para telas pequenas (ex: iPhone SE)
  
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      
      <View style={styles.header}>
        <Icon name="bank" size={30} color="#2F79BD" />
        <Text style={styles.headerText}>Ganho Mensal</Text>
      </View>
         
      {/* Card Meus Ganhos */}
      <View style={[styles.card, isSmallScreen && styles.cardSmall]}>
        <View style={styles.topCard}>
          <Text style={styles.text}>Meus Ganhos:</Text>
          <TouchableHighlight onPress={() => {}}>
            <View>
              <Icon name="plus-box" size={30} color="#0D60FB" />
            </View>
          </TouchableHighlight>
        </View>
        <Receitas />
      </View>

      <View style={styles.header}>
        <Icon name="wallet-outline" size={30} color="#2F79BD" />
        <Text style={styles.headerText}>Gasto Mensal</Text>
      </View>
         
      {/* Card Minhas Despesas */}
      <View style={[styles.card, isSmallScreen && styles.cardSmall]}>
        <View style={styles.topCard}>
          <Text style={styles.text}>Meus Gastos:</Text>
          <TouchableHighlight onPress={() => {}}>
            <View>
              <Icon name="plus-box" size={30} color="#0D60FB" />
            </View>
          </TouchableHighlight>
        </View>
        <Despesas />
      </View>

      <View style={styles.header}>
        <Icon name="scale-unbalanced" size={30} color="#2F79BD" />
        <Text style={styles.headerText}>Balanço</Text>
      </View>
         
      {/* Card Balanço */}
      <View style={[styles.cardBalanco, isSmallScreen && styles.cardBalancoSmall]}>
        <View style={styles.topCard}>
          <Text style={styles.text}>Meus Gastos:</Text>
          <TouchableHighlight onPress={() => {}}>
            <View>
              <Icon name="plus-box" size={30} color="#0D60FB" />
            </View>
          </TouchableHighlight>
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
    justifyContent: 'center',
    padding: 10, // Adicionado padding para garantir que o conteúdo não fique colado na borda da tela
  },
  card: {
    width: '80%',
    height: 120,
    backgroundColor: '#114A7E',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    alignSelf: 'center',
  },
  cardSmall: {
    width: '90%', // Maior largura para telas pequenas
    height: 100, // Menor altura para telas pequenas
  },
  cardBalanco: {
    width: '80%',
    height: 180,
    backgroundColor: '#114A7E',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    alignSelf: 'center',
  },
  cardBalancoSmall: {
    width: '90%',
    height: 160,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 33.5,
    marginBottom: 10,
  },
  headerText: {
    color: '#286197',
    fontSize: 18,
    fontWeight: 'light',
    marginLeft: 10,
  },
  topCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '400',
  },
});
