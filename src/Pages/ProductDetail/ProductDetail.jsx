import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductDetail.module.css";
import { data } from "../../data";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { add } from "../../Features/CartSlice";

const ProductDetail = () => {
  const { productId } = useParams();
  const newData = [...data];
  const findSingleProduct = newData.find((item) => item.id == productId);

  const [changeImage, setChangeImage] = useState(findSingleProduct.image);

  const dispatch = useDispatch();

  const addToCart = (singleProduct) => {
    dispatch(add(singleProduct));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: { xs: "wrap", md: "nowrap" },
        width: "90%",
        m: "30px auto",
        justifyContent: "space-evenly",
        gap: "10px",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "10px",
            flexWrap: { xs: "wrap-reverse", md: "nowrap" },
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", sm: "column", md: "column" },
                justifyContent: "space-between",
                gap: "15px",
              }}
            >
              {findSingleProduct.gallery.map((item, ind) => {
                return (
                  <Box
                    onClick={() => {
                      setChangeImage(item[ind + 1]);
                    }}
                    key={ind}
                    sx={{
                      width: { xs: "60px" },
                      height: { xs: "60px" },
                      cursor: "pointer",
                      "&:hover": { filter: "brightness(70%)" },
                    }}
                  >
                    <img
                      src={item[ind + 1]}
                      alt="image"
                      loading="lazy"
                      className={styles.imageGallery}
                    />
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box
            sx={{
              width: { xs: "300px", lg: "450px" },
              height: { xs: "300px", lg: "450px" },
            }}
          >
            <img
              src={changeImage}
              alt="Product Image"
              loading="lazy"
              className={styles.image}
            />
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography sx={{ mt: 3, fontSize: { xs: "25px", md: "35px" } }}>
          {findSingleProduct.name.toLocaleUpperCase()}
        </Typography>
        <Typography variant="h4">₹{findSingleProduct.price}</Typography>
        <Typography sx={{ my: 2, fontSize: { xs: "15px", md: "20px" } }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minus
          doloribus facilis consequuntur maiores alias, saepe velit animi, vero
          soluta quo consequatur. Dicta tempore saepe modi! Quaerat doloremque
          repellat commodi architecto adipisci natus molestias ratione nostrum
          asperiores quod sit fugit magni deleniti autem totam veniam aut
          voluptatem incidunt, ea dolore.
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          Category: {findSingleProduct.category.toUpperCase()}
        </Typography>
        <Button
          onClick={() => {
            addToCart(findSingleProduct);
          }}
          variant="contained"
          sx={{
            bgcolor: "#CC313D",
            my: 2,
            "&:hover": { bgcolor: "#F7C5CC", color: "black" },
          }}
        >
          Add to cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetail;
