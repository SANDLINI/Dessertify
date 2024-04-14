import React from "react";
import styles from "./Navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { AppBar, Typography, Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { useSelector } from "react-redux";
import logo from '/logo.jpg'

const Navbar = () => {
  const itemQuantity = useSelector((state) => state.cart.cartItems);

  const navigate = useNavigate();

  const navToHome = () => {
    navigate("/");
  };

  return (
    <AppBar sx={{ background: "transparent", position: "static" }}>
      <Toolbar
        className={styles.toolbar}
        sx={{
          display: "flex",
          justifyContent: { xs: "space-evenly", sm: "center" },
          gap: { xs: "1px", sm: "20px" },
        }}
      >
        <Box
          onClick={navToHome}
          sx={{
            width: "150px",
            height: "50px",
            position: "absolute",
            left: "5%",
            cursor: "pointer",
            display: { xs: "none", md: "block" },
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{ width: "100%", height: "100%", borderRadius: "5px" }}
          />
        </Box>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.notActive
          }
          to={"/"}
        >
          <Typography>Home</Typography>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.notActive
          }
          to={"/products"}
        >
          <Typography>Products</Typography>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.notActive
          }
          to={"/about"}
        >
          <Typography>About</Typography>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.notActive
          }
          to={"/cart"}
        >
          <Typography>
            Cart {itemQuantity.length ? `: ${itemQuantity.length}` : " "}
          </Typography>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
