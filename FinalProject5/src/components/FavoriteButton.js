import React, { useState, useEffect } from 'react';
import { IconButton } from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';

const FavoriteButton = ({ coinId }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorited(favorites.includes(coinId));
  }, [coinId]);

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.includes(coinId)) {
      favorites = favorites.filter(id => id !== coinId);
    } else {
      favorites.push(coinId);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorited(!isFavorited);
  };

  return (
    <IconButton onClick={toggleFavorite} color="primary">
      {isFavorited ? <Favorite /> : <FavoriteBorder />}
    </IconButton>
  );
};

export default FavoriteButton;