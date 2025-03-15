import axios from "axios";

export const getCoinRequest = async (coinId) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching coin data:", error);
    return null;
  }
};

export const getMarketData = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching market data:", error);
    return [];
  }
};
