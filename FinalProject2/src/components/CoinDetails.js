import {
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartYLabel,
} from "@rainbow-me/animated-charts";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getCoinRequest, getMarketChart } from "../Request";
import { ListContext } from "../Context";

export default function CoinDetails() {
  const { listData, getStoreCoinId, removeStoreCoinId } = useContext(ListContext);
  const navigation = useNavigation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [chatData, setChatData] = useState(null);
  const [coinPrice, setCoinPrice] = useState("1");
  const [usdPrice, setUsdPrice] = useState("");

  const route = useRoute();
  const {
    params: { coinId },
  } = route;

  const getCoinInformation = async () => {
    setLoading(true);
    const getCoinData = await getCoinRequest(coinId);
    const getCoinChart = await getMarketChart(coinId);
    setData(getCoinData);
    setChatData(getCoinChart);
    setUsdPrice(getCoinData.market_data.current_price.usd.toString());
    setLoading(false);
  };

  useEffect(() => {
    getCoinInformation();
  }, []);

  if (loading || !data) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  const {
    image: { small },
    name,
    symbol,
    market_data: { current_price, price_change_percentage_24h },
    description: { en },
  } = data;
  const { prices } = chatData;

  const handleIconColor = price_change_percentage_24h < 0 ? "#dc2626" : "#34d399";
  const handleIcon = price_change_percentage_24h < 0 ? "caretdown" : "caretup";
  const { width: size } = Dimensions.get("window");

  const handleFormat = (value) => {
    "worklet";
    if (value === "") {
      return `$${current_price.usd.toFixed(2)}`;
    }
    return `$${parseFloat(value).toFixed(2)}`;
  };

  const handleChartColor = current_price.usd > prices[0][1] ? "#16c784" : "#ea3943";

  const handleUsdPrice = (value) => {
    setUsdPrice(value);
    const floatValue = parseFloat(value) || 0;
    const result = (floatValue / current_price.usd).toFixed(4);
    setCoinPrice(result.toString());
  };

  const handlecoinPrice = (value) => {
    setCoinPrice(value);
    const floatValue = parseFloat(value) || 0;
    const result = (floatValue * current_price.usd).toFixed(2);
    setUsdPrice(result.toString());
  };

  const handleWatchListIconColor = () => {
    return listData.some((coinIdValue) => coinIdValue === coinId);
  };

  const handleWatchListFunction = () => {
    if (handleWatchListIconColor()) {
      return removeStoreCoinId(coinId);
    } else {
      return getStoreCoinId(coinId);
    }
  };

  return (
    <View style={styles.container}>
      <ChartPathProvider
        data={{
          points: prices.map((price) => ({ x: price[0], y: price[1] })),
          smoothingStrategy: "bezier",
        }}
      >
        <View style={styles.header}>
          <Ionicons
            name="chevron-back"
            size={24}
            color="white"
            onPress={() => navigation.goBack()}
          />
          <View style={styles.titleContainer}>
            <Image source={{ uri: small }} style={styles.coinImage} />
            <Text style={styles.symbolText}>
              {symbol.toUpperCase()}
            </Text>
          </View>
          <Ionicons
            name="star"
            size={20}
            color={handleWatchListIconColor() ? "yellow" : "white"}
            onPress={handleWatchListFunction}
          />
        </View>

        <View style={styles.priceContainer}>
          <View>
            <Text style={styles.nameText}>{name}</Text>
            <ChartYLabel
              format={handleFormat}
              style={styles.priceText}
            />
          </View>

          <View style={[styles.percentageContainer, { backgroundColor: handleIconColor }]}>
            <AntDesign
              name={handleIcon}
              size={14}
              color="white"
              style={styles.percentageIcon}
            />
            <Text style={styles.percentageText}>
              {price_change_percentage_24h.toFixed(2)}%
            </Text>
          </View>
        </View>

        <View>
          <ChartPath
            height={size / 2}
            stroke={handleIconColor}
            width={size}
            strokeWidth={2}
          />
          <ChartDot style={{ backgroundColor: handleChartColor }} />
        </View>

        <View style={styles.converterContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.currencyLabel}>
              {symbol.toUpperCase()}
            </Text>
            <TextInput
              value={coinPrice}
              style={styles.input}
              keyboardType="numeric"
              onChange={({ nativeEvent: { text } }) => handlecoinPrice(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.currencyLabel}>USD</Text>
            <TextInput
              value={usdPrice}
              style={styles.input}
              keyboardType="numeric"
              onChange={({ nativeEvent: { text } }) => handleUsdPrice(text)}
            />
          </View>
        </View>
      </ChartPathProvider>
      <Text style={styles.historyTitle}>History</Text>
      <Text style={styles.description}>{en}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
  loader: {
    marginTop: 96,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinImage: {
    height: 40,
    width: 40,
  },
  symbolText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  priceContainer: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameText: {
    color: 'white',
    fontSize: 16,
  },
  priceText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  percentageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    padding: 8,
  },
  percentageIcon: {
    marginRight: 4,
  },
  percentageText: {
    color: 'white',
    fontWeight: 'bold',
  },
  converterContainer: {
    flexDirection: 'row',
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  currencyLabel: {
    color: 'white',
    alignSelf: 'center',
  },
  input: {
    fontSize: 16,
    flex: 1,
    height: 40,
    margin: 8,
    borderBottomWidth: 4,
    borderBottomColor: '#374151',
    padding: 8,
    color: 'white',
  },
  historyTitle: {
    color: 'white',
    marginTop: 24,
    marginBottom: 12,
    textAlign: 'center',
    fontSize: 18,
  },
  description: {
    color: 'white',
    paddingHorizontal: 12,
    fontSize: 18,
  },
});