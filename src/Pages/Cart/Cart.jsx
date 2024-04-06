import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
import styles from "./Cart.module.css";
import { add, remove } from "../../Features/CartSlice";
import NoItemInCart from "../../components/NoItemInCart/NoItemInCart";
const Cart = () => {
  const getcartItems = useSelector((state) => state.cart);

  let total = 0;
  getcartItems.cartItems.forEach(
    (item) => (total += item.price * item.quantity)
  );

  const dispatch = useDispatch();

  const btnCss = {
    bgcolor: "#CC313D",
    "&:hover": {
      bgcolor: "#f7c5cc",
      color: "black",
    },
  };

  const increaseCartQuantity = (item) => {
    dispatch(add(item));
  };

  const decreaseCartQuantity = (item) => {
    dispatch(remove(item.id));
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "50vh",
        m: "auto",
        display: "flex",
        flexWrap: { xs: "nowrap" },
        gap: { xs: "15px", md: "30px" },
        justifyContent: "center",
      }}
    >
      {getcartItems.cartItems.length === 0 && (
        <NoItemInCart heading={" I am hungry please add some desserts here."} />
      )}

      {getcartItems.cartItems.length >= 1 && (
        <Box>
          {getcartItems.cartItems.map((item) => {
            return (
              <Box
                key={item.id}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  padding: 1,
                  gap: "10px",
                  alignItems: "center",
                  my: 2,
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              >
                <Typography sx={{ width: "100px" }}>{item.name}</Typography>
                <Box sx={{ width: "120px", height: "120px" }}>
                  <img
                    src={item.image}
                    alt="image"
                    loading="lazy"
                    className={styles.image}
                  />
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <Button
                    onClick={() => {
                      decreaseCartQuantity(item);
                    }}
                    variant="contained"
                    sx={btnCss}
                  >
                    -
                  </Button>
                  <Typography>{item.quantity}</Typography>
                  <Button
                    onClick={() => {
                      increaseCartQuantity(item);
                    }}
                    variant="contained"
                    sx={btnCss}
                  >
                    +
                  </Button>
                </Box>
                <Typography>Price ₹{item.price * item.quantity}</Typography>
              </Box>
            );
          })}
        </Box>
      )}

      <Box
        sx={{
          position: "sticky",
          top: "10%",
          width: "35%",
          height: { xs: "50px" },
          display: getcartItems.cartItems.length ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            p: 1,
            fontSize: { xs: "15px", md: "25px" },
            fontWeight: { xs: "none" },
          }}
        >
          Cart Total : ₹{total}
        </Typography>
      </Box>
    </Box>
  );
};

export default Cart;
