import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native';
import products1 from './products.json';
import Products from './Products';

const ProductsScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(products1);
  }, []);

  return (
    <ScrollView>
      <View>
        <Text>Top products of 2020</Text>
        <FlatList
          data={products}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Products
              name={item.name}
              price={item.price}
              stock={item.stock}
              img={item.image}
              desc={item.description}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default ProductsScreen;
