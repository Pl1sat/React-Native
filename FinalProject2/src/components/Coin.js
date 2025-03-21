import { Image, Pressable, Text, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Coin({ marketCoin }) {
  const {
    image,
    name,
    market_cap_rank,
    symbol,
    price_change_percentage_24h,
    current_price,
    market_cap,
    id,
  } = marketCoin;

  const handleMarketCap = (market_cap) => {
    if (market_cap > 1e12) {
      return `${Math.floor(market_cap / 1e12)}T`;
    }
    if (market_cap > 1e9) {
      return `${Math.floor(market_cap / 1e9)}B`;
    }
    if (market_cap > 1e6) {
      return `${Math.floor(market_cap / 1e6)}M`;
    }
    if (market_cap > 1e3) {
      return `${Math.floor(market_cap / 1e3)}K`;
    }
    return market_cap;
  };

  const handleIconColor = price_change_percentage_24h < 0 ? "#dc2626" : "#34d399";
  const handleIcon = price_change_percentage_24h < 0 ? "caretdown" : "caretup";
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("CoinDetails", { coinId: id })}
    >
      <Image
        style={styles.image}
        source={{ uri: image }}
      />
      <View>
        <Text style={styles.nameText}>{name}</Text>
        <View style={styles.row}>
          <View style={styles.rankContainer}>
            <Text style={styles.rankText}>{market_cap_rank}</Text>
          </View>
          <Text style={styles.symbolText}>{symbol.toUpperCase()}</Text>
          <AntDesign
            name={handleIcon}
            size={14}
            color={handleIconColor}
            style={styles.icon}
          />
          <Text style={[styles.percentageText, { color: handleIconColor }]}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{current_price}</Text>
        <Text style={styles.mcapText}>MCap {handleMarketCap(market_cap)}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#1f2937',
    backgroundColor: '#121212',
  },
  image: {
    height: 40,
    width: 40,
    marginRight: 16,
    alignSelf: 'center',
  },
  nameText: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rankContainer: {
    backgroundColor: '#374151',
    paddingHorizontal: 4,
    borderRadius: 4,
    marginRight: 8,
  },
  rankText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  symbolText: {
    color: 'white',
    marginRight: 8,
    fontSize: 14,
  },
  icon: {
    alignSelf: 'center',
    marginRight: 8,
  },
  percentageText: {
    marginRight: 8,
    fontSize: 14,
  },
  priceContainer: {
    marginLeft: 'auto',
    alignItems: 'flex-end',
  },
  priceText: {
    color: 'white',
    marginBottom: 8,
    fontSize: 16,
  },
  mcapText: {
    color: 'white',
    fontSize: 14,
  },
});