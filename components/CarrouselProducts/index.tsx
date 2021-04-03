import Slider from "react-slick";
import { ProductCard } from "../ProductCard";

import { ProductsInterface } from "./types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CarrouselProducts = ({ products }: ProductsInterface) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <Slider {...settings}>
      {products.map((product, index) => {
        return (
          <ProductCard
            key={index}
            name={product.name}
            oldPrice={product.oldPrice}
            newPrice={product.newPrice}
            images={product.images}
          />
        );
      })}
    </Slider>
  );
};
