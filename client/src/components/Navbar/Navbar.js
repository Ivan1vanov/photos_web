import React, { useState, useEffect } from 'react';
import {Button } from '@material-ui/core';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import './index.css'

import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';

import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  const [isOpen, setIsOpen] = useState(false)

  const openMenuHandler = () => {
      setIsOpen(!isOpen)
  }

  return (
    <div className='navbar'>
        <div onClick={openMenuHandler} className={isOpen ? 'model open' : 'model'} >
          <h2 onClick={openMenuHandler} className='closeMenu'><CancelIcon style={{color: 'red'}}/></h2> 
          <div className='navigation'>
          <NavLink onClick={openMenuHandler} className='menuLink' to='/'>Main Page</NavLink>
          <NavLink onClick={openMenuHandler} className='menuLink' to='/about'>History</NavLink>
          <NavLink onClick={openMenuHandler} className='menuLink' to='/home'>Photos</NavLink>
          <NavLink onClick={openMenuHandler} className='menuLink' to='/kontakt'>Kontakt info</NavLink>
          {user?.result ? (
          <div className={classes.profile}>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <NavLink className='menuLink' onClick={openMenuHandler} to="/auth" >登錄</NavLink>
        )}
          </div>
       
        
        </div>
          <div className='menuContainer'>
    <h1 onClick={openMenuHandler} className='menu'>MENU<MenuIcon/> </h1>
    </div>
      {/* <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
           Welcome to home!
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar> */}
    </div>
  );
};

export default Navbar;
