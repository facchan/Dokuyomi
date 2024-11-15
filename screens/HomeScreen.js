import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/manga') // URL Jikan API untuk manga
      .then((response) => response.json())
      .then((json) => {
        setData(json.data); // Asumsi `json.data` berisi array objek manga
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.mal_id.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          {/* Menampilkan gambar thumbnail */}
          <Image
            source={{ uri: item.images.jpg.image_url }} // URL gambar dari respons Jikan
            style={styles.thumbnail}
          />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 8,
    borderBottomWidth: 5,
    borderBottomColor: '#ccc',
  },
  thumbnail: {
    width: 50,
    height: 75,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
