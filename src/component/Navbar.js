// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
// import { Link } from 'react-router-dom'
// import { Badge } from '@mui/material';
// import { useSelector } from 'react-redux'; 
// const Navbar = () => {
//   const totalQuantity = useSelector(state => state.cart.totalQuantity);
//   return (
//     <AppBar position="static">
//       <Toolbar style={{marginLeft:"-800px",backgroundColor:"#030200",height:"100px"}}>
//         <Box sx={{ flexGrow: 2 }}>
       
        
//           <Button variant="contained"  className="nav-link-item" style={{marginLeft:"215px"}}><Link to="/">Lit Unique</Link></Button>
//         </Box>
        
//         <Box>
//        <div className='navbar-links'>

        
//         <Button variant="contained"  className="nav-link-item"><Link to="/wallet">Wallet</Link></Button>
//         <Button variant="contained"  className="nav-link-item"><Link to="/shirt">Shirts</Link></Button>
//         <Button variant="contained"  className="nav-link-item"><Link to="/laptop">Laptop</Link></Button>
//         <Button
//       variant="contained"
//       component={Link}
//       to="/"
//       className="nav-link-item"
//     >
//       <Badge badgeContent={totalQuantity} color="secondary" max={99}>
//         <AddShoppingCartOutlinedIcon />
//       </Badge>
//     </Button>
      
//        </div>
       
     
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Navbar;




import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';

const Navbar = ({ toggleDrawer }) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <AppBar position="static">
      <Toolbar style={{ marginLeft: '-800px', backgroundColor: '#030200', height: '100px' }}>
        <Box sx={{ flexGrow: 2 }}>
          <Button variant="contained" className="nav-link-item" style={{ marginLeft: '215px' }}>
            <Link to="/">Lit Unique</Link>
          </Button>
        </Box>
        <Box>
          <div className="navbar-links">
            <Button variant="contained" className="nav-link-item">
              <Link to="/wallet">Wallet</Link>
            </Button>
            <Button variant="contained" className="nav-link-item">
              <Link to="/shirt">Shirts</Link>
            </Button>
            <Button variant="contained" className="nav-link-item">
              <Link to="/laptop">Laptop</Link>
            </Button>

            {/* Cart Icon button to open the drawer */}
            <Button variant="contained" className="nav-link-item" onClick={() => toggleDrawer(true)}>
              <Badge badgeContent={totalQuantity} color="secondary" max={99}>
                <AddShoppingCartOutlinedIcon />
              </Badge>
            </Button>
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
