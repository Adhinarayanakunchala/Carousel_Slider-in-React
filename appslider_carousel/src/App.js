import React from "react";
import { Carousel } from "react-responsive-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider_1 from "./assets/aa.jpg";
import Slider_2 from "./assets/adij.jpg";
import Slider_3 from "./assets/adiyogi.jpg";
import Slider_4 from "./assets/adik.jpg";
import Slider_5 from "./assets/dont-waste-time.png";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-30 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={1000}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{
                position: "absolute",
                top: "50%",
                left: "15px",
                zIndex: 2,
                backgroundColor: "transparent",
                border: "none",
                fontSize: "25px",
                color: "powderblue",
              }}
            >
              <FaChevronLeft />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{
                position: "absolute",
                top: "50%",
                right: "15px",
                zIndex: 2,
                backgroundColor: "transparent",
                border: "none",
                fontSize: "25px",
                color: "powderblue",
              }}
            >
              <FaChevronRight />
            </button>
          )
        }
      >
        <div>
          <img loading="lazy" src={Slider_1} alt="" />
        </div>
        <div>
          <img loading="lazy" src={Slider_2} alt="" />
        </div>
        <div>
          <img loading="lazy" src={Slider_3} alt="" />
        </div>
        <div>
          <img loading="lazy" src={Slider_4} alt="" />
        </div>
        <div>
          <img loading="lazy" src={Slider_5} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
