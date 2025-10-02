import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './screens/Inicio';
import Detalle from './screens/Detalle';
import Acerca from './screens/Acerca';

export type RootStackParamList = {
  Inicio: undefined;
  Detalle: { id: number; user: string };
  Acerca: { appName: string; version: string };
  Contactos: undefined;
  DetalleContacto: { contacto: { id: number; nombre: string; telefono: string; email: string } };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Detalle" component={Detalle} />
        <Stack.Screen name="Acerca" component={Acerca} />
        <Stack.Screen name="Contactos" component={require('./screens/Contactos').default} />
        <Stack.Screen name="DetalleContacto" component={require('./screens/DetalleContacto').default} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
