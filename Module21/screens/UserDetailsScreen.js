import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const UserDetailsScreen = ({ route }) => {
    const { user } = route.params;

    return (
        <View style={styles.container}>
            {/* ✅ Use Gravatar Default Image */}
            <Image 
                source={{ uri: "https://www.gravatar.com/avatar/?d=mp" }} // Reliable placeholder image
                style={styles.profileImage} 
            />
            
            {/* Display User Details */}
            <Text style={styles.name}>{user.name.firstname} {user.name.lastname}</Text>
            <Text style={styles.username}>@{user.username}</Text>
            <Text style={styles.email}>📧 {user.email}</Text>
            <Text style={styles.phone}>📞 {user.phone || "No Phone Available"}</Text>
            <Text style={styles.address}>
                📍 {user.address?.street || "Unknown Street"}, 
                {user.address?.city || "Unknown City"}, 
                {user.address?.zipcode || "00000"}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#fff",
        flex: 1,
        alignItems: "center",
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 15,
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
    },
    username: {
        fontSize: 18,
        color: "gray",
    },
    email: {
        fontSize: 16,
        marginTop: 10,
    },
    phone: {
        fontSize: 16,
        marginTop: 5,
    },
    address: {
        fontSize: 16,
        marginTop: 5,
        color: "gray",
        textAlign: "center",
    },
});

export default UserDetailsScreen;



