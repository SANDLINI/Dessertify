import React from "react";
import styles from "./NewsLetter.module.css";
import { Box, Typography, Button } from "@mui/material";
const NewsLetter = ({
  heading,
  btnText,
  placeholder,
  image,
  display,
  onchange,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: "100%" },
        margin: "auto",
        mb: "150px",
        mt: "10px",
      }}
    >
      <Box sx={{ width: "100%", height: "500px", m: "auto" }}>
        <img
          src={image}
          alt="Desserts Image"
          loading="lazy"
          className={styles.image}
        />
      </Box>
      <Box
        className={styles.newsLetter}
        sx={{
          width: { xs: "90%", sm: "70%", md: "50%", lg: "30%" },
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      >
        <Typography variant="h5" sx={{ color: "white", fontWeight: "bolder" }}>
          {heading}
        </Typography>
        <Box
          sx={{
            width: { xs: "100%" },
            m: "auto",
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              onchange(e);
            }}
            placeholder={placeholder}
          />
          <Button
            sx={{
              width: "30%",
              mt: 1,
              mx: "auto",
              bgcolor: "#cc313d",
              fontWeight: "bold",
              "&:hover": { bgcolor: "#f7c5cc", color: "black" },
              display: btnText ? "block" : "none",
              textAlign: "center",
            }}
            variant="contained"
          >
            {btnText}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsLetter;
