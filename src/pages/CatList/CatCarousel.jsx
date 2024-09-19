import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BookcardS } from "./CatCard/CatCardS";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 2200px;
  margin: 0 auto;
`;

const StyledSlider = styled(Slider)`
  .slick-slide > div {
    margin: 0 10px;
  }
  .slick-list {
    margin: 0 -10px;
    margin-left: -120px;
  }
  @media (max-width: 1024px) {
    width: 2000px;
  }

  @media (max-width: 768px) {
    .slick-slide > div {
      margin: 0 5px;
    }

    .slick-list {
      margin: 0 -5px;
    }
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
  &:focus {
    outline: none;
  }
`;

const NextArrow = ({ onClick }) => (
  <ArrowButton onClick={onClick} style={{ right: -50 }}>
    <ChevronRight />
  </ArrowButton>
);

const PrevArrow = ({ onClick }) => (
  <ArrowButton onClick={onClick} style={{ left: -50 }}>
    <ChevronLeft />
  </ArrowButton>
);

const CatCarousel = ({ cats }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <StyledSlider {...settings}>
        {cats.map((cat) => (
          <BookcardS
            key={cat.id}
            id={cat.id}
            imageUrl={cat.url}
            height={cat.height}
          />
        ))}
      </StyledSlider>
    </CarouselContainer>
  );
};

export default CatCarousel;
