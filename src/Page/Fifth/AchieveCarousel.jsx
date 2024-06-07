import React from "react";
import AchieveImage from "../../Component/AchieveImage";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const AchieveCarousel = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <div className="container mx-auto grid grid-cols-12">
        <div className="col-span-12  mt-4 ">
          <div className="slider-container">
            <Slider {...settings}>
              <div className="px-2">
                <AchieveImage></AchieveImage>
              </div>
              <div className="px-2">
                <AchieveImage></AchieveImage>
              </div>
              <div className="px-2">
                <AchieveImage></AchieveImage>
              </div>
              <div className="px-2">
                <AchieveImage></AchieveImage>
              </div>
              <div className="px-2">
                <AchieveImage></AchieveImage>
              </div>
              <div className="px-2">
                <AchieveImage></AchieveImage>
              </div>
              <div className="px-2">
                <AchieveImage></AchieveImage>
              </div>
              <div className="px-2">
                <AchieveImage></AchieveImage>
              </div>
              <div className="px-2">
                <AchieveImage></AchieveImage>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default AchieveCarousel;
