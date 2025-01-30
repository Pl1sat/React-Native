import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Home = () => {
  return (
    <View>
         <View>
        
        <Icon name="home" size={30} color="blue" />
        <Text style={{ color: "blue" }}>Home</Text>
      </View>
      <View>
        <Icon name="menu" size={30} color="blue" />
        <Text style={{ color: "blue" }}>Menu</Text>
      </View>
      <View>
        <Icon name="settings" size={30} color="blue" />
        <Text style={{ color: "blue" }}>Settings</Text>
      </View>
      <View>
        <Icon name="account-circle" size={30} color="blue" />
        <Text style={{ color: "blue" }}>Account</Text>
      </View>
      <View>
        <Icon name="search" size={30} color="blue" />
        <Text style={{ color: "blue" }}>Search</Text>
      </View>
      <View>
        <Icon name="favorite" size={30} color="blue" />
        <Text style={{ color: "blue" }}>Favorite</Text>
      </View>
      <View>
        <Icon name="shopping-cart" size={30} color="blue" />
        <Text style={{ color: "blue" }}>Shopping Cart</Text>
      </View>
      <View>
        <Icon name="notifications" size={30} color="blue" />
        <Text style={{ color: "blue" }}>Notifications</Text>
      </View>
      <View>
        <Icon name="arrow-back" size={30} color="blue" />
        <Text style={{ color: "blue" }}>Back</Text>
      </View>
      <View>
        <Icon name="check-circle" size={30} color="blue" />
        <Text style={{ color: "blue" }}>Check Circle</Text>
      </View>
    </View>
  );
};

export default Home;


