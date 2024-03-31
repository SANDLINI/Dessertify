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
      <img
        src={image}
        alt="Product image"
        loading="lazy"
        className={styles.image}
      />
      <Typography
        className={styles.cardContent}
        sx={{
          position: "absolute",
          bottom: { xs: "-45px", md: 0 },
          fontWeight: "bolder",
          width: "100%",
          pt: { md: "3px" },
          backgroundColor: "#f7c5cc",
          textAlign: "center",
          height: { xs: "40px", md: 0 },
          overflow: "hidden",
          fontSize: { xs: "12px", md: "15px" },
        }}
      >
        {productName}
      </Typography>
    </Box>
  );
};

export default ProductCard;
