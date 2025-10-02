import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Inicio: undefined;
  Detalle: { id: number; user: string };
  Acerca: { appName: string; version: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Detalle'>;

export default function Detalle({ route, navigation }: Props) {
  const { id, user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Detalle</Text>
      <Text>Producto id: {id}</Text>
      <Text>Usuario: {user}</Text>

      <Button
        title="Ir a Acerca de (enviando appName y version)"
        onPress={() => navigation.navigate('Acerca', { appName: 'MiPrimeraApp', version: '1.0.0' })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 20, marginBottom: 12 },
});
