import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Inicio'>;

export default function Inicio() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Inicio</Text>
      <Button
        title="Ir a Detalle (enviando id y user)"
        onPress={() => navigation.navigate('Detalle', { id: 42, user: 'Derek' })}
      />
      <View style={{ height: 12 }} />
      <Button title="Ver Contactos" onPress={() => navigation.navigate('Contactos')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 20, marginBottom: 12 },
});
