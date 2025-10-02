import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Inicio: undefined;
  Detalle: { id: number; user: string };
  Acerca: { appName: string; version: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Acerca'>;

export default function Acerca({ route, navigation }: Props) {
  const { appName, version } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Acerca</Text>
      <Text>App: {appName}</Text>
      <Text>Versión: {version}</Text>

      <View style={{ marginTop: 12 }}>
        <Button title="Volver" onPress={() => navigation.goBack()} />
      </View>

      <View style={{ marginTop: 8 }}>
        <Button title="Volver al Inicio" onPress={() => navigation.navigate('Inicio')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 20, marginBottom: 12 },
});
