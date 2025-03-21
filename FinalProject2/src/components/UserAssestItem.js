import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const UserAssestItem = ({ asset }) => {
  const { name, symbol, currentPrice, priceChangePercentage, holdings, image } = asset;

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.symbolText}>{symbol.toUpperCase()}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>${currentPrice}</Text>
        <View style={styles.percentageContainer}>
          <AntDesign
            name={priceChangePercentage >= 0 ? "caretup" : "caretdown"}
            size={14}
            color={priceChangePercentage >= 0 ? "#34d399" : "#dc2626"}
            style={styles.icon}
          />
          <Text style={[
            styles.percentageText,
            { color: priceChangePercentage >= 0 ? "#34d399" : "#dc2626" }
          ]}>
            {priceChangePercentage.toFixed(2)}%
          </Text>
        </View>
      </View>
      <View style={styles.holdingsContainer}>
        <Text style={styles.holdingsValueText}>${(currentPrice * holdings).toFixed(2)}</Text>
        <Text style={styles.holdingsQuantityText}>{holdings} {symbol.toUpperCase()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 16,
    marginHorizontal: 10,
  },
  image: {
    height: 40,
    width: 40,
  },
  nameContainer: {
    marginLeft: 8,
  },
  nameText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  symbolText: {
    color: '#6b7280',
    fontSize: 12,
  },
  priceContainer: {
    marginLeft: 'auto',
  },
  priceText: {
    color: 'white',
  },
  percentageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 2,
  },
  percentageText: {
    fontSize: 12,
  },
  holdingsContainer: {
    marginLeft: 'auto',
    alignItems: 'flex-end',
  },
  holdingsValueText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  holdingsQuantityText: {
    color: '#6b7280',
    fontSize: 12,
  },
});

export default UserAssestItem;