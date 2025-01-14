import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, ActivityIndicator, StyleSheet } from 'react-native';

const ProductListScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://api.example.com/products');
      const data = await response.json();
      setProducts(data.products);
      setLoading(false);
    } catch (err) {
      setError('Failed to load products.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#4CAF50" />;
  }

  if (error) {
    return <View><Text style={styles.errorText}>{error}</Text></View>;
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ProductListScreen;
