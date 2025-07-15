import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GaleriaScreen from '../screens/GaleriaScreen';
import VisualizadorScreen from '../screens/VisualizadorScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Galeria"
          component={GaleriaScreen}
          options={{ title: 'Livros para Repertório' }}
        />
        <Stack.Screen
          name="Visualizador"
          component={VisualizadorScreen}
          options={{ title: 'Detalhes do Livro' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;