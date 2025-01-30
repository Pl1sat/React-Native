import React from "react";
import { View, Text, Image } from "react-native";

const Product = ({ item }) => {
  return (
    <View>
      <Image source={{ uri: item.image }} />
      <View>
        <Text>{item.title}</Text>
        <Text>{item.price} $</Text>
      </View>
    </View>
  );
};

export default Product;
