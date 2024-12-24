import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator, Button } from 'react-native';

const DogApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDogData = async () => {
    try {
      setError(null);
      setLoading(true);
      const response = await fetch('https://api.thedogapi.com/v1/breeds');
      if (!response.ok) throw new Error('Failed to fetch data');
      const json = await response.json();
      setData(json.slice(0, 10));
    } catch (err) {
      console.error(err); // Log the error for debugging
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDogData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name || 'Unknown'}</Text>
      <Image
        source={{ uri: item.image?.url || 'https://via.placeholder.com/150' }}
        style={styles.image}
      />
      <Text>Bred for: {item.bred_for || 'Unknown'}</Text>
    </View>
  );

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error)
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
        <Button title="Retry" onPress={fetchDogData} />
      </View>
    );
  if (!Array.isArray(data) || !data.length) return <Text style={styles.empty}>No data available</Text>;

  return (
    <FlatList
      contentContainerStyle={{ ...styles.container, flexGrow: 1 }}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  item: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: 'cover',
  },
  description: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  error: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginBottom: 16,
  },
  empty: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default DogApi;
