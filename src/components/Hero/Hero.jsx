import React from "react";
import { Box, Button, Typography } from "@mui/material";
import styles from "./Hero.module.css";
import { useNavigate } from "react-router-dom";
const Hero = ({ heading, subHeading, image, visible }) => {
  const navigate = useNavigate();

  const navToProducts = () => {
    navigate("/products");
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", lg: "90%" },
        height: "auto",
        margin: " 10px auto 100px auto",
        mb: { xs: 4, sm: 7, md: 10 },
        position: "relative",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%" },
          height: { xs: "auto", sm: "500px", lg: "650px" },
        }}
      >
        <img src={image} alt="image" loading="lazy" className={styles.image} />
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "55%", lg: "40%" },
          position: "absolute",
          top: { xs: "30%" },
          left: { xs: 0, md: "47%", lg: "50%" },
          px: { xs: 1, lg: 2 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "25px", sm: "35px", md: "40px" },
          }}
        >
          {heading}
        </Typography>
        <Typography sx={{ fontSize: { xs: "15px", sm: "25px" } }}>
          {subHeading}
        </Typography>
        <Button
          onClick={navToProducts}
          variant="contained"
          sx={{
            mt: "10px",
            display: visible === false ? "none" : "block",
            padding: "5px 15px",
            fontWeight: "bolder",
            bgcolor: "#CC313D",
            "&:hover": {
              bgcolor: "#F7C5CC",
              color: "black",
            },
          }}
        >
          <Typography sx={{ fontSize: { xs: "8px", sm: "12px", md: "15px" } }}>
            See products{" "}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
