import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/lion-facing-right.png'
import { classes } from 'istanbul-lib-coverage';

const Navbar = () => {
    return (
        <>
          <AppBar position="fixed" className={classes.AppBar} color="inherit">
              <Toolbar>
                  <Typography variant="h6" className={classes.AppBar} color="inherit">
                      <img src={logo} alt="The Lion King Store" height="25px" className={classes.image} />
                      The Lion King Store
                  </Typography>
                  <div className={classes.grow} />
                  <div className={classes.button}>
                      <IconButton aria-label="show cart items" color="inherit">
                          <Badge badgeContent={2} color="secondary">
                              <ShoppingCart />
                          </Badge>
                      </IconButton>
                  </div>
              </Toolbar>
          </AppBar>
        </>
    )
}

export default Navbar;