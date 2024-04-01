import React from "react";
import styles from "./Footer.module.css";
import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  const icons = {
    color: "white",
    cursor: "pointer",
  };

  return (
    <Box sx={{ position: "absolute", width: "100%" }}>
      <Box
        sx={{
          textAlign: "center",
          height: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          bgcolor: "#cc313d",
        }}
      >
        <Typography
          variant="h3"
          sx={{ color: "white", fontWeight: "bold", mb: 3 }}
        >
          DESSERTIFY
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            mb: 2,
          }}
        >
          <FacebookIcon sx={icons} />
          <XIcon sx={icons} />
          <YouTubeIcon sx={icons} />
        </Box>
        <Typography sx={{ color: "white" }}>
          <span>&#169;</span> 2024 All rights reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
