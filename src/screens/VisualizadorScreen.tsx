// src/screens/VisualizadorScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// 1. Defina os mesmos tipos de rota que na GaleriaScreen
type RootStackParamList = {
  Galeria: undefined;
  Visualizador: { livro: { id: string; titulo: string; autor: string; imagem: any } };
};

// 2. Use o tipo para que o componente conheça a rota e os parâmetros
type Props = NativeStackScreenProps<RootStackParamList, 'Visualizador'>;

const VisualizadorScreen = ({ route }: Props) => { // 3. Receba a propriedade 'route'
  
  // 4. Extraia o objeto 'livro' dos parâmetros da rota
  const { livro } = route.params;

  return (
    <View style={styles.container}>
      {/* 5. Exiba as informações do livro que foi passado */}
      <Image source={livro.imagem} style={styles.imagemTelaCheia} />
      <Text style={styles.titulo}>{livro.titulo}</Text>
      <Text style={styles.autor}>{livro.autor}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  imagemTelaCheia: {
    width: '90%',
    height: '70%',
    borderRadius: 15,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  autor: {
    fontSize: 18,
    color: '#666',
    marginTop: 5,
  },
});

export default VisualizadorScreen;