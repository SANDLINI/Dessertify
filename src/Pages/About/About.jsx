import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./About.module.css";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import image from "/AboutUsHeroImage.jpg";
import teams from "/teams.jpg";
import teams2 from "/teams2.jpg";

const About = () => {
  return (
    <Box>
      <NewsLetter
        image={image}
        heading="About us, Trusted by Dessert Lovers Everywhere"
      />
      <Box
        sx={{
          width: { xs: "100%", md: "90%" },
          height: "auto",
          m: "auto",
          boxshadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <Box
          sx={{
            mb: 5,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "70%", md: "50%" },
              height: { xs: "auto", sm: "auto", md: "70%" },
            }}
          >
            <img
              src={teams}
              loading="lazy"
              alt="Teams"
              className={styles.image}
            />
          </Box>
          <Box sx={{ width: { xs: "98%", sm: "70%", md: "45%" } }}>
            <Typography variant="h4">
              Our Story:Crafting Sweet Moments
            </Typography>
            <Typography>
              In the heart of our bustling city, amidst the aromatic whirl of
              bakeries and cafes, our journey began with a simple love for
              desserts. It all started in a cozy kitchen, where childhood
              memories mingled with the irresistible scent of freshly baked
              cookies and cakes. Inspired by the joy that sweet treats bring, we
              embarked on a delicious adventure to share our passion with the
              world. But like any good recipe, our story had its blend of
              challenges and triumphs. From sourcing the finest ingredients to
              mastering the perfect balance of flavors, each hurdle became an
              opportunity to refine our craft and deepen our commitment to
              quality. What sets us apart is not just the desserts we create,
              but the stories they inspire. From intimate celebrations to grand
              occasions, our confections have become part of the fabric of
              people's lives, woven into moments of joy, laughter, and shared
              indulgence. As we look to the future, our vision is simple yet
              profound: to continue crafting sweet moments that delight the
              senses and nourish the soul. With every bite, we hope to evoke
              memories of home, spark conversations among friends, and create a
              legacy of sweetness that endures for generations to come. Join us
              on this delectable journey as we invite you to experience the
              magic of our desserts—one bite at a time. Indulge. Share.
              Celebrate. Welcome to our world of sweet delights.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            mb: 3,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "70%", md: "50%" },
              height: { xs: "auto", sm: "auto", md: "70%" },
            }}
          >
            <img
              src={teams2}
              alt="Teams"
              loading="lazy"
              className={styles.image}
            />
          </Box>
          <Box sx={{ width: { xs: "98%", sm: "70%", md: "45%" }, mb: "150px" }}>
            <Typography variant="h4">
              Our Commitment to Quality: A Recipe for Excellence
            </Typography>
            <Typography>
              Absolutely! Here's a crafted story focusing on "Our Commitment to
              Quality": Our Commitment to Quality: A Recipe for Excellence At
              the heart of our dessert journey lies a steadfast commitment to
              quality that shapes everything we do. From the moment an idea is
              born to the instant a sweet creation graces your table, every step
              of our process is infused with a dedication to excellence. It all
              begins with the ingredients—the building blocks of our culinary
              creations. We scour the globe in search of the finest, freshest,
              and most flavorful ingredients, from locally sourced fruits to
              exotic spices handpicked from distant lands. Each ingredient is
              carefully selected, ensuring that only the best finds its way into
              our recipes. But our commitment to quality doesn't end there. In
              our kitchens, precision and passion dance in perfect harmony as
              our talented team of bakers and pastry chefs work their magic.
              With meticulous attention to detail and a relentless pursuit of
              perfection, they transform raw ingredients into edible works of
              art, each one a testament to our unwavering standards. Quality
              isn't just a goal; it's a promise we make to you, our cherished
              customers.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
