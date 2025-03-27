import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const HomeButton = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleClick}
      style={{ margin: '10px' }}
    >
      Home
    </Button>
  );
};

export default HomeButton;