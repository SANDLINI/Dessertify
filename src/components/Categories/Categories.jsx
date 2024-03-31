import React from "react";
import styles from "./Categories.module.css";
import { Box, Typography } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import iceCream from "/Icecream.jpg";
import CupCake from "/CupCake.jpg";
import Cookies from "/Cookies.jpg";
import Puddding from "/Pudding.jpg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { categoryChange } from "../../Features/CartSlice";

const Categories = () => {
  const dispatch = useDispatch();

  const navToProduct = useNavigate();

  const click = (category) => {
    dispatch(categoryChange(category));
    navToProduct("/products");
  };

  return (
    <Box sx={{ mb: "150px" }}>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", fontWeight: "bold", mb: "50px" }}
      >
        Categories
      </Typography>
      <Box
        sx={{
          m: "10px auto 40px auto",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <ProductCard
          click={() => click("iceCream")}
          image={iceCream}
          productName="Ice Cream"
        />
        <ProductCard
          click={() => {
            click("cupcake");
          }}
          image={CupCake}
          productName="Cup Cake"
        />
        <ProductCard
          click={() => {
            click("cookies");
          }}
          image={Cookies}
          productName="Cookies"
        />
        <ProductCard
          click={() => {
            click("pudding");
          }}
          image={Puddding}
          productName="Pudding"
        />
      </Box>
    </Box>
  );
};

export default Categories;
