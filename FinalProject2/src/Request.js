import axios from "axios";

const handleApiError = (error, context) => {
  if (error.response) {
    // Server responded with error status
    if (error.response.status === 429) {
      throw new Error("API rate limit exceeded. Please try again later.");
    }
    throw new Error(`${context}: ${error.response.data.error || 'Server error'}`);
  } else if (error.request) {
    // Request made but no response
    throw new Error("Network error. Please check your internet connection.");
  } else {
    // Other errors
    throw new Error(error.message || "An unexpected error occurred");
  }
};

export const getCoinRequest = async (coinId) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}`
    );
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to fetch coin data");
  }
};

export const getMarketChart = async (coinId) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=1&interval=hourly`
    );
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to fetch market chart");
  }
};

export const getMarketData = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h"
    );
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to fetch market data");
  }
};

export const getWatchListData = async (updatedCoinId) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${updatedCoinId}&order=market_cap_desc&per_page=1&page=1&sparkline=false`
    );
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to fetch watchlist data");
  }
};