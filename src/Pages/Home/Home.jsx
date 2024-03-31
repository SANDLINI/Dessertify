import React from "react";
import Hero from "../../components/Hero/Hero";
import image from "/HomeHero2.jpg";
import image2 from "/hero4.jpg";
import Popular from "../../components/Popular/Popular";
import { Box } from "@mui/material";
import Categories from "../../components/Categories/Categories";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";
import dessertsImage from "/desserts.jpg";
const Home = () => {
  return (
    <Box>
      <main>
        <nav>
          <Hero
            heading="DESSERTIFY"
            subHeading=" A meal that ends with dessert is a celebration in itself! Pick a treat
        from our range of desserts including tarts, tiramisu cup, banoffee
        high and cupcakes."
            image={image}
            visible={true}
          />
          <Box>
            <Popular />
          </Box>
          <Box>
            <Hero
              subHeading="Dessert is probably the most important stage of the meal, since it will be the last thing your guests remember before they pass out all over the table. - William Powell"
              image={image2}
              visible={false}
            />
          </Box>
          <Box>
            <Categories />
          </Box>
        </nav>
      </main>
      <Box>
        <NewsLetter
          heading=" Subscribe to our NewsLetter for new updates, discounts and offers."
          btnText="Subscribe"
          placeholder="Enter your email"
          image={dessertsImage}
        />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
