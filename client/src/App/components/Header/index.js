import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography>Movie List Exercise</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
