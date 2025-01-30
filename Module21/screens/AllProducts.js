import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image } from "react-native";

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data); // ✅ Updating state with fetched data
            } catch (error) {
                console.log("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Product item={item} />}
        />
    );
};

// ✅ Define the missing Product component
const Product = ({ item }) => {
    return (
        <View>
            <Image source={{ uri: item.image }} />
            <Text>{item.title}</Text>
            <Text>${item.price}</Text>
        </View>
    );
};

export default AllProducts;
