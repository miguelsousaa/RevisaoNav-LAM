import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, ScrollView, Image, TouchableOpacity, Text, View } from 'react-native';

const livros = [
  { id: '1', titulo: '1984', autor: 'George Orwell', imagem: require('../../assets/livro1.png') },
  { id: '2', titulo: 'Vidas Secas', autor: 'Graciliano Ramos', imagem: require('../../assets/livro2.png') },
  { id: '3', titulo: 'Quarto de Despejo', autor: 'Carolina Maria de Jesus', imagem: require('../../assets/livro3.png') },
  { id: '4', titulo: 'O Povo Brasileiro', autor: 'Darcy Ribeiro', imagem: require('../../assets/livro4.png') },
];

type RootStackParamList = {
  Galeria: undefined;
  Visualizador: { livro: typeof livros[0] };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Galeria'>;

const GaleriaScreen = ({ navigation }: Props) => {

  const handlePressLivro = (livro: typeof livros[0]) => {
    navigation.navigate('Visualizador', { livro: livro });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {livros.map(livro => (
        <TouchableOpacity key={livro.id} style={styles.cartaoLivro} onPress={() => handlePressLivro(livro)}>
          <Image source={livro.imagem} style={styles.imagemLivro} />
          <Text style={styles.tituloLivro}>{livro.titulo}</Text>
          <Text style={styles.autorLivro}>{livro.autor}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#FFFACD',
  },
  cartaoLivro: {
    backgroundColor: '#4682B4',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  imagemLivro: {
    width: 150,
    height: 220,
    borderRadius: 8,
    marginBottom: 10,
  },
  tituloLivro: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E2E8F0',
    textAlign: 'center',
  },
  autorLivro: {
    fontSize: 14,
    color: '#A0AEC0',
    textAlign: 'center',
  },
});


export default GaleriaScreen;