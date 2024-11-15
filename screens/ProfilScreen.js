import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ProfilScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{ uri: 'https://via.placeholder.com/150' }} // Ganti dengan URL gambar profil
      />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>johndoe@example.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: 'bold' },
  email: { fontSize: 16, color: 'gray' },
});
