import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const NavBar = () => {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: theme.palette.warning.main }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <NavLink to="/">
                <img
                  alt="Logo"
                  className="logo"
                  src="/src/assets/logo.png"
                  style={{ height: 74.2529358627 }}
                />
              </NavLink>
            </IconButton>
          </Box>
          <Box>
            <NavLink to="/login" className="navbar-brand">
              <Button color="inherit">Login</Button>
            </NavLink>
            <NavLink to="/signup" className="navbar-brand">
              <Button color="inherit">Signup</Button>
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
