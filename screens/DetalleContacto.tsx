import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'DetalleContacto'>;

export default function DetalleContacto({ route, navigation }: Props) {
  const { contacto } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle del contacto</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>ID:</Text>
          <Text style={styles.value}>{contacto.id}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Nombre:</Text>
          <Text style={styles.value}>{contacto.nombre}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Teléfono:</Text>
          <Text style={styles.value}>{contacto.telefono}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{contacto.email}</Text>
        </View>
      </View>

      <View style={{ marginTop: 16 }}>
        <Button title="Volver" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: '600', marginBottom: 12, textAlign: 'center' },
  card: { backgroundColor: '#fafafa', padding: 16, borderRadius: 8, elevation: 1 },
  row: { flexDirection: 'row', marginBottom: 10 },
  label: { width: 90, color: '#666', fontWeight: '600' },
  value: { flex: 1, color: '#222' },
});
