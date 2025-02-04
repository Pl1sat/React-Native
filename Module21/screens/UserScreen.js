import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const UserScreen = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/users");
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.log("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="blue" />;
    }

    return (
        <View style={styles.container}>
            <View style={styles.scrollContainer}>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} navigation={navigation} />
                ))}
            </View>
        </View>
    );
};

// ✅ User Card with Updated Default Image
const UserCard = ({ user, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("UserDetails", { user })}>
            <View style={styles.card}>
                {/* Use Gravatar Default Image */}
                <Image 
                    source={{ uri: "https://www.gravatar.com/avatar/?d=mp" }} // Reliable placeholder image
                    style={styles.image} 
                />
                <View style={styles.details}>
                    <Text style={styles.name}>{user.name.firstname} {user.name.lastname}</Text>
                    <Text style={styles.username}>@{user.username}</Text>
                    <Text style={styles.email}>📧 {user.email}</Text>
                    <Text style={styles.address}>
                        📍 {user.address?.street || "Unknown Street"}, {user.address?.city || "Unknown City"}, {user.address?.zipcode || "00000"}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scrollContainer: {
        flex: 1,
        overflow: "scroll",
        maxHeight: "100vh",
    },
    card: {
        flexDirection: "row",
        padding: 15,
        margin: 10,
        backgroundColor: "#f9f9f9",
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15,
    },
    details: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
    },
    username: {
        fontSize: 16,
        color: "gray",
    },
    email: {
        fontSize: 14,
        color: "blue",
    },
    address: {
        fontSize: 14,
        color: "gray",
    },
});

export default UserScreen;
