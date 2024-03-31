import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { AppBar, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { useSelector } from "react-redux";

const Navbar = () => {
  const itemQuantity = useSelector((state) => state.cart.cartItems);

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
