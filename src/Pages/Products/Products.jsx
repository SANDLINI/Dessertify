import React, { useCallback, useEffect, useState } from "react";
import { data } from "../../data";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import productsHeroImage from "/productsHeroImage.jpg";
import ProductCard from "../../components/ProductCard/ProductCard";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import { useSelector } from "react-redux";

const Products = () => {
  const [products, setProducts] = useState(data);
  const [activeBtnColor, setActiveBtnColor] = useState("all");

  const getData = useSelector((state) => state.cart.changeCategory);

  const filterProductOnBtnClick = useCallback((category) => {
    let newData = [...data];
    if (category === "all") {
      setProducts(data);
    } else {
      const filteredProducts = newData.filter((item) => {
        return item.category === category;
      });
      setProducts(filteredProducts);
    }
  }, []);

  const changeBtnColorOnClick = useCallback((category) => {
    setActiveBtnColor(category);
  }, []);

  useEffect(() => {
    filterProductOnBtnClick(getData);
    changeBtnColorOnClick(getData);
  }, [getData, filterProductOnBtnClick, changeBtnColorOnClick]);

  const filterProductBox = {
    display: "flex",
    justifyContent: "space-evenly",
    width: { xs: "90%", md: "70%" },
    flexWrap: "wrap",
    mx: "auto",
    mt: "-100px",
    mb: "50px",
    border: "2px solid black",
    borderradius: "50px",
    boxshadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  };

  const navToProductDetail = useNavigate();

  const click = (id) => {
    navToProductDetail(`/products/${id}`);
  };

  const onChangeHandler = (e) => {
    if (e.target.value !== "") {
      const filterProducts = products.filter((item) => {
        return item.name.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setProducts(filterProducts);
    } else {
      setProducts(data);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <NewsLetter
          heading="Search for your favorite desserts..."
          placeholder="Search..."
          image={productsHeroImage}
          onchange={onChangeHandler}
          inputVisible={true}
        />
      </Box>
      <Box sx={filterProductBox}>
        <Button
          sx={{
            fontSize: { xs: "8px", sm: "12px", md: "15px" },
            m: 1,
            color: "white",
            fontWeight: "bolder",
            bgcolor: activeBtnColor === "all" ? "#CC313D" : "#F7C5CC",
            "&:hover": { bgcolor: "#CC313D", color: "black" },
          }}
          onClick={() => {
            filterProductOnBtnClick("all");
            changeBtnColorOnClick("all");
          }}
          variant="contained"
        >
          All
        </Button>
        <Button
          sx={{
            fontSize: { xs: "8px", sm: "12px", md: "15px" },
            m: 1,
            color: "white",
            fontWeight: "bolder",
            bgcolor: activeBtnColor === "iceCream" ? "#CC313D" : "#F7C5CC",
            "&:hover": { bgcolor: "#CC313D", color: "black" },
          }}
          onClick={() => {
            filterProductOnBtnClick("iceCream");
            changeBtnColorOnClick("iceCream");
          }}
          variant="contained"
        >
          Ice Cream
        </Button>

        <Button
          sx={{
            fontSize: { xs: "8px", sm: "12px", md: "15px" },
            m: 1,
            color: "white",
            fontWeight: "bolder",
            bgcolor: activeBtnColor === "cupcake" ? "#CC313D" : "#F7C5CC",
            "&:hover": { bgcolor: "#CC313D", color: "black" },
          }}
          onClick={() => {
            filterProductOnBtnClick("cupcake");
            changeBtnColorOnClick("cupcake");
          }}
          variant="contained"
        >
          Cup cake
        </Button>
        <Button
          sx={{
            fontSize: { xs: "8px", sm: "12px", md: "15px" },
            m: 1,
            color: "white",
            fontWeight: "bolder",
            bgcolor: activeBtnColor === "cookies" ? "#CC313D" : "#F7C5CC",
            "&:hover": { bgcolor: "#CC313D", color: "black" },
          }}
          onClick={() => {
            filterProductOnBtnClick("cookies");
            changeBtnColorOnClick("cookies");
          }}
          variant="contained"
        >
          Cookies
        </Button>
        <Button
          sx={{
            fontSize: { xs: "8px", sm: "12px", md: "15px" },

            m: 1,
            color: "white",
            fontWeight: "bolder",
            bgcolor: activeBtnColor === "pudding" ? "#CC313D" : "#F7C5CC",
            "&:hover": { bgcolor: "#CC313D", color: "black" },
          }}
          onClick={() => {
            filterProductOnBtnClick("pudding");
            changeBtnColorOnClick("pudding");
          }}
          variant="contained"
        >
          Pudding
        </Button>
      </Box>
      <Box sx={{ width: "100%", m: "auto" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "90%",
            mx: "auto",
            gap: "50px",
          }}
        >
          {products.map((items) => {
            return (
              <Box key={items.id} sx={{ display: "flex" }}>
                <ProductCard
                  image={items.image}
                  productName={items.name}
                  click={click}
                  id={items.id}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
