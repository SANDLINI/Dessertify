import React from "react";
import styles from "./ProductCard.module.css";
import { Box, Typography } from "@mui/material";
const ProductCard = ({ image, productName, click, id }) => {
  return (
    <Box
      onClick={() => click(id)}
      className={styles.Card}
      sx={{
        width: {
          xs: "120px",
          sm: "190px",
          md: "200px",
          lg: "240px",
          xl: "290px",
        },
        height: {
          xs: "120px",
          sm: "190px",
          md: "200px",
          lg: "240px",
          xl: "290px",
        },

        position: "relative",
        cursor: "pointer",
      }}
    >
      <img src={image} alt="Product image" loading="lazy" className={styles.image} />
      <Typography
        className={styles.cardContent}
        sx={{
          position: "absolute",
          bottom: "0px",
          fontWeight: "bolder",
          width: "100%",
          textAlign: "center",
          height: 0,
          overflow: "hidden",
        }}
      >
        {productName}
      </Typography>
    </Box>
  );
};

export default ProductCard;
