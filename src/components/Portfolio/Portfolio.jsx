import React, { useContext, useState } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import Inv1 from "../../img/inv1.png";
import Inv2 from "../../img/inv2.png";
import Inv3 from "../../img/inv3.png";
import Inv4 from "../../img/inv4.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [expandedImage, setExpandedImage] = useState(null);

  const expandImage = (imageSrc) => {
    setExpandedImage(imageSrc);
  };

  const handleClose = () => {
    setExpandedImage(null);
  };

  return (
    <div>
      <div >
      <div className={expandedImage ? "portfolio exp" : "portfolio"} id="portfolio">
        {/* heading */}
        <span style={{ color: darkMode ? "white" : "" }}>
          On Going Projects
        </span>
        <span>Inventory Management App</span>

        <span style={{ marginRight: "90%" }}>Swipe right for more</span>

        {/* slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio-slider"
        >
          <SwiperSlide>
            <img
              src={Inv3}
              alt=""
              onClick={() => expandImage(Inv3)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Inv1}
              alt=""
              onClick={() => expandImage(Inv1)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Inv2}
              alt=""
              onClick={() => expandImage(Inv2)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Inv4}
              alt=""
              onClick={() => expandImage(Inv4)}
            />
          </SwiperSlide>
        </Swiper>

        <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
        <span>Ecommerce-clone</span>

        <span style={{ marginRight: "90%" }}>Swipe right for more</span>

        {/* slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio-slider"
        >
          <SwiperSlide>
            <img
              src={Sidebar}
              alt=""
              onClick={() => expandImage(Sidebar)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Ecommerce}
              alt=""
              onClick={() => expandImage(Ecommerce)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={MusicApp}
              alt=""
              onClick={() => expandImage(MusicApp)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={HOC}
              alt=""
              onClick={() => expandImage(HOC)}
            />
          </SwiperSlide>
        </Swiper>
        </div>

      {expandedImage && (
        <div className="modal">
          <div className="modal-content">
            <img src={expandedImage} alt="" className="expanded-image"/>
            <span className="close" onClick={handleClose}>
              &times;
            </span>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Portfolio;
