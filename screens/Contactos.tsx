import React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type NavProp = NativeStackNavigationProp<RootStackParamList, 'Contactos'>;

type Contacto = {
  id: number;
  nombre: string;
  telefono: string;
  email: string;
};

const CONTACTOS: Contacto[] = [
  { id: 1, nombre: 'Juan', telefono: '555-0101', email: 'juan@example.com' },
  { id: 2, nombre: 'Ana', telefono: '555-0102', email: 'ana@example.com' },
  { id: 3, nombre: 'Pedro', telefono: '555-0103', email: 'pedro@example.com' },
  { id: 4, nombre: 'Lucía', telefono: '555-0104', email: 'lucia@example.com' },
  { id: 5, nombre: 'Marcos', telefono: '555-0105', email: 'marcos@example.com' },
];

function Avatar({ nombre }: { nombre: string }) {
  const initials = nombre
    .split(' ')
    .map((s) => s[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <View style={styles.avatar}>
      <Text style={styles.avatarText}>{initials}</Text>
    </View>
  );
}

export default function Contactos() {
  const navigation = useNavigation<NavProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contactos</Text>
      <FlatList
        data={CONTACTOS}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <Pressable
            android_ripple={{ color: '#e6e6e6' }}
            style={({ pressed }) => [styles.row, pressed && styles.pressed]}
            onPress={() => navigation.navigate('DetalleContacto', { contacto: item })}
          >
            <Avatar nombre={item.nombre} />
            <View style={styles.info}>
              <Text style={styles.itemText}>{item.nombre}</Text>
              <Text style={styles.itemSub}>{item.telefono}</Text>
            </View>
            <Text style={styles.chev}>›</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, backgroundColor: '#fff' },
  title: { fontSize: 22, marginBottom: 8, textAlign: 'center', fontWeight: '600' },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 8 },
  pressed: { opacity: 0.85 },
  avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#4A90E2', alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: '#fff', fontWeight: '700' },
  info: { flex: 1, marginLeft: 12 },
  itemText: { fontSize: 16, fontWeight: '500' },
  itemSub: { color: '#666', marginTop: 4 },
  chev: { color: '#ccc', fontSize: 20, marginLeft: 8 },
  separator: { height: 1, backgroundColor: '#f1f1f1', marginLeft: 68 },
});
