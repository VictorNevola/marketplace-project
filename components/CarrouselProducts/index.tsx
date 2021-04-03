import Slider from "react-slick";
import { ProductCard } from "../ProductCard";

import { ProductsInterface } from "./types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CarrouselProducts = ({ products, activeQuickCart }: ProductsInterface) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true
        }
      }
    ]
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
            refID={product.ref}
            openQuickCart={activeQuickCart}
          />
        );
      })}
    </Slider>
  );
};
