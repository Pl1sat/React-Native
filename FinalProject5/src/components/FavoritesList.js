import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, makeStyles, Grid, Container, Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { fetchCoinDetails } from '../services/coinService';
import HomeButton from './HomeButton'; // Import HomeButton

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor: '#14161a',
    minHeight: '100vh',
  },
  card: {
    maxWidth: 345,
    margin: '0 auto',
    textAlign: 'center',
    backgroundColor: '#1e2125',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  },
  title: {
    fontSize: 14,
    color: '#888',
  },
  coinId: {
    fontSize: '1.5rem',
    color: '#fff',
  },
  price: {
    fontSize: '1.2rem',
    color: '#4caf50',
  },
  noFavorites: {
    textAlign: 'center',
    marginTop: theme.spacing(4),
    color: '#888',
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: '0 auto 10px auto',
  },
}));

const FavoritesList = () => {
  const [favorites, setFavorites] = useState([]);
  const [coinData, setCoinData] = useState({});
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(favorites);

    const fetchCoinData = async () => {
      const data = {};
      for (const coinId of favorites) {
        try {
          const result = await fetchCoinDetails(coinId);
          data[coinId] = {
            name: result.name,
            logo: result.image.thumb,
            price: result.market_data.current_price.usd,
          };
        } catch (error) {
          console.error(`Failed to fetch data for coin: ${coinId}`, error);
        }
      }
      setCoinData(data);
    };

    fetchCoinData();
  }, []);

  const handleCardClick = (coinId) => {
    history.push(`/coins/${coinId}`);
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h4" align="center" gutterBottom>
        My Favorites
      </Typography>
      <HomeButton /> {/* Add HomeButton here */}
      {favorites.length > 0 ? (
        <Grid container spacing={3}>
          {favorites.map(coinId => (
            <Grid item xs={12} sm={6} md={4} key={coinId}>
              <Card className={classes.card} onClick={() => handleCardClick(coinId)}>
                <CardContent>
                  <Avatar
                    alt={coinData[coinId] ? coinData[coinId].name : coinId}
                    src={coinData[coinId] ? coinData[coinId].logo : 'https://via.placeholder.com/200'}
                    className={classes.avatar}
                  />
                  <Typography className={classes.title} gutterBottom>
                    Favorite Coin
                  </Typography>
                  <Typography className={classes.coinId}>
                    {coinData[coinId] ? coinData[coinId].name : coinId}
                  </Typography>
                  <Typography className={classes.price}>
                    {coinData[coinId] ? `$${coinData[coinId].price}` : 'Loading...'}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" className={classes.noFavorites}>
          No favorites added yet.
        </Typography>
      )}
    </Container>
  );
};

export default FavoritesList;