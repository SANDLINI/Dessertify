import { Box } from "@mui/material";
import React from "react";
import { Bars } from "react-loader-spinner";
const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "90vh",
      }}
    >
      <Bars
        height="80"
        width="80"
        radius="9"
        color="#cc313d"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </Box>
  );
};

export default Loader;
