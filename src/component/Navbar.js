import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import logo1 from '../images/logo1.PNG'
import Button from '@mui/material/Button';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';

import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{marginLeft:"-800px",backgroundColor:"#030200",height:"100px"}}>
        <Box sx={{ flexGrow: 2 }}>
       
        
          <Button variant="contained"  className="nav-link-item"><Link to="/">Lit Unique</Link></Button>
        </Box>
        
        <Box>
       <div className='navbar-links'>

        <Button variant="contained"  className="nav-link-item"><Link to="/wallet">Wallet</Link></Button>
        <Button variant="contained"  className="nav-link-item"><Link to="/shirt">Shirts</Link></Button>
        <Button variant="contained"  className="nav-link-item"><Link to="/laptop">Laptop</Link></Button>
       </div>
       
     
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
