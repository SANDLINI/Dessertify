import React from "react";
import styles from "./Popular.module.css";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import image1 from "/chocolate-cupcake.jpg";
import image2 from "/chocolate-tart.jpg";
import image3 from "/red-velvet.jpg";
import image4 from "/chocolate-iceCream.jpg";
import { data } from "../../data";

const Popular = () => {
  const navToProductDetail = useNavigate();
  const click = (id) => {
    navToProductDetail(`/products/${id}`);
  };

  return (
    <Box sx={{ mb: "150px" }}>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", mb: "50px", fontWeight: "bold" }}
      >
        Popular
      </Typography>
      <Box
        sx={{
          width: { xs: "100%", sm: "95%", lg: "90%" },
          m: "10px auto 40px auto",
          display: "flex",
          gap: { xs: "0px", sm: "20px", md: "10px" },
          justifyContent: "space-between",
        }}
      >
        <ProductCard
          click={click}
          id={data[0].id}
          image={image1}
          productName={data[0].name}
        />
        <ProductCard
          id={data[3].id}
          click={click}
          image={image2}
          productName={data[3].name}
        />
        <ProductCard
          id={data[10].id}
          click={click}
          image={image3}
          productName={data[10].name}
        />
        <ProductCard
          id={data[1].id}
          click={click}
          image={image4}
          productName={data[1].name}
        />
      </Box>
    </Box>
  );
};

export default Popular;
