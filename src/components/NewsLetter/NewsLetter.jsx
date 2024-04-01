import React from "react";
import styles from "./NewsLetter.module.css";
import { Box, Typography, Button } from "@mui/material";
const NewsLetter = ({
  heading,
  btnText,
  placeholder,
  image,
  inputVisible,
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
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            m: "auto",
          }}
        >
          <Box sx={{ display: inputVisible ? "block" : "none", mr: "10px" }}>
            <input
              type="text"
              onChange={(e) => {
                onchange(e);
              }}
              placeholder={placeholder}
            />
          </Box>
          <Box>
            <Button
              sx={{
                mt: 1,
                // fontSize: "18px",
                textAlign: "center",
                display: btnText ? "block" : "none",
                bgcolor: "#cc313d",
                fontWeight: "bold",
                "&:hover": { bgcolor: "#f7c5cc", color: "black" },
              }}
              variant="contained"
            >
              {btnText}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsLetter;
