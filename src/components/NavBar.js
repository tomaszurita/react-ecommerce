import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import logo from '../img/logo.png';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from "./CartWidget";
import './navbar.css';

const pages = [{
    name: "Antiparras",
    id: 101
},
{
    name: "Gorras",
    id: 102
},
{
    name: "Mallas",
    id: 103
},
{
    name: "Aletas",
    id: 104
}];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/"><img src={logo} alt="logo" style={{width:'4rem'}}/></Link>
          <Box sx={{ flexGrow: 1, display: {xs: 'flex', md: 'none',}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <NavLink className="navlink" to={`category/${page.name}`}>
                        <Typography textAlign="center">{page.name}</Typography>                        
                    </NavLink>

                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box className="navbar-box" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
            {pages.map((page) => (
              <NavLink
                className="navlink"
                key={page.id}
                onClick={handleCloseNavMenu}
                to={`category/${page.name}`}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </NavLink>
            ))}
          </Box>
          <Box><NavLink to='/cart' className="navlink"><CartWidget /></NavLink></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
