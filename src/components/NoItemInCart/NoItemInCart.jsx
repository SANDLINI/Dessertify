import { Box, Typography } from "@mui/material";
import React from "react";
import noDesserts from "/NoDesserts.jpeg";
const NoItemInCart = ({ heading }) => {
  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h6"
        sx={{ width: { xs: "300px", sm: "500px" }, textAlign: "center" }}
      >
        {heading}
      </Typography>
      <Box sx={{ width: "300px", height: "300px" }}>
        <img
          src={noDesserts}
          alt="image"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default NoItemInCart;
