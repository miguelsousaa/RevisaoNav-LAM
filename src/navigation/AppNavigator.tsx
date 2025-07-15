// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Importa os ícones

// Importa as nossas telas
import HomeScreen from '../screens/HomeScreen';
import GaleriaScreen from '../screens/GaleriaScreen';
import VisualizadorScreen from '../screens/VisualizadorScreen';

// Cria os dois tipos de navegador que vamos usar
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// 1. Criamos um navegador SÓ para a galeria e o visualizador
// Isto permite que, ao clicar num livro, a barra de abas desapareça,
// mostrando a imagem em tela cheia, que é o comportamento desejado.
function GaleriaStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GaleriaHome" // Nome diferente para não conflitar
        component={GaleriaScreen}
        options={{ title: 'Livros para Repertório' }}
      />
      <Stack.Screen
        name="Visualizador"
        component={VisualizadorScreen}
        options={{ title: 'Detalhes do Livro' }}
      />
    </Stack.Navigator>
  );
}

// 2. Este é o nosso navegador principal, com as abas
function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // Define um ícone para cada aba
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Início') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Repertório') {
              iconName = focused ? 'book' : 'book-outline';
            }
            return <Ionicons name={iconName as any} size={size} color={color} />;
          },
          // Estilos para a barra de abas
          tabBarActiveTintColor: '#4299E1',
          tabBarInactiveTintColor: 'gray',
          headerShown: false, // Esconde o cabeçalho das abas
        })}
      >
        {/* 3. Definimos as nossas duas abas principais */}
        <Tab.Screen name="Início" component={HomeScreen} />
        <Tab.Screen name="Repertório" component={GaleriaStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;