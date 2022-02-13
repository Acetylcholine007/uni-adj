import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Carousel.css";
import CarouselItem from "./CarouselItem";

const useStyles = makeStyles((theme) => ({}));

const Carousel = ({ products }) => {
  const [itemIndex, setItemIndex] = useState(0);
  const history = useHistory();
  const classes = useStyles();

  const switchHandler = (forward) => {
    if (forward) {
      if (itemIndex < products.length - 1) setItemIndex(itemIndex + 1);
      else setItemIndex(0);
    } else {
      if (itemIndex > 0) setItemIndex(itemIndex - 1);
      else setItemIndex(products.length - 1);
    }
  };

  const productSlicer = (products) => {
    if (products.length === 0) {
      return null;
    } else {
      return [
        products.at(itemIndex - 1),
        products.at(itemIndex),
        products.at(itemIndex + 1 === products.length ? 0 : itemIndex + 1),
      ];
    }
  };

  const slicedProducts = productSlicer(products);
  console.log(slicedProducts);

  return (
    <div className="carousel">
      <Grid container sx={{ position: "relative" }} spacing={2}>
        {slicedProducts[0] && (
          <Grid item xs={12} md={4}>
            <CarouselItem product={slicedProducts[0]} />
          </Grid>
        )}
        {slicedProducts[1] && (
          <Grid item xs={12} md={4} sx={{ display: { sm: 'none', md: 'block' } }}>
            <CarouselItem product={slicedProducts[1]} />
          </Grid>
        )}
        {slicedProducts[2] && (
          <Grid item xs={12} md={4} sx={{ display: { sm: 'none', md: 'block' } }}>
            <CarouselItem product={slicedProducts[2]} />
          </Grid>
        )}
        <IconButton
          className="carousel-back"
          onClick={() => switchHandler(false)}
          sx={{ position: "absolute", top: "7rem", left: "-1.5rem" }}
        >
          <ChevronLeft />
        </IconButton>
        <IconButton
          className="carousel-next"
          onClick={() => switchHandler(true)}
          sx={{ position: "absolute", top: "7rem", right: "1rem" }}
        >
          <ChevronRight />
        </IconButton>
      </Grid>
    </div>
  );
};

export default Carousel;
