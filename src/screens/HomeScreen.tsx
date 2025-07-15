import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.conteudoScrollView}>
      <View style={styles.secao}>
        <Text style={styles.tituloSecao}>Redação ENEM Carina</Text>
        <View style={styles.cartao}>
          <Text style={styles.tituloCartao}>Bem-vindo(a)!</Text>
          <Text style={styles.textoCartao}>Seu guia completo para uma boa redação.</Text>
          <TouchableOpacity style={styles.botaoPrimario}>
            <Text style={styles.textoBotao}>Começar a Estudar</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.tituloSubSecao}>Tema do Dia</Text>
        <TouchableOpacity style={styles.itemDestaque}>
          <Text style={styles.tituloItemDestaque}>O impacto da inteligência artificial na sociedade contemporânea</Text>
          <Text style={styles.subtituloItemDestaque}>#Tecnologia #Futuro #Ética</Text>
          <Text style={styles.textoItemDestaque}>Explore os desafios e oportunidades que a IA traz para o debate social...</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  conteudoScrollView: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  secao: {
    marginBottom: 30,
    backgroundColor: '#4682B4',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  tituloSecao: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E2E8F0',
    marginBottom: 20,
    textAlign: 'center',
  },
  tituloSubSecao: {
    fontSize: 20,
    fontWeight: '600',
    color: '#CBD5E1',
    marginTop: 20,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#4A5568',
    paddingBottom: 5,
  },
  cartao: {
    backgroundColor: '#4A5568',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  tituloCartao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E2E8F0',
    marginBottom: 5,
  },
  textoCartao: {
    fontSize: 16,
    color: '#CBD5E1',
    textAlign: 'center',
    marginBottom: 10,
  },
  botaoPrimario: {
    backgroundColor: '#4299E1',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 10,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDestaque: {
    backgroundColor: '#4A5568',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  tituloItemDestaque: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E2E8F0',
    marginBottom: 5,
  },
  subtituloItemDestaque: {
    fontSize: 14,
    color: '#CBD5E1',
    marginBottom: 8,
  },
  textoItemDestaque: {
    fontSize: 15,
    color: '#A0AEC0',
  },
});

export default HomeScreen;