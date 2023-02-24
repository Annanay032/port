import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Ecommerce-clone</span>

      <span style={{marginRight: '90%'}}>Swipe right for more</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" onClick={'https://main--steady-druid-b31ab0.netlify.app/brand'}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt=""  onClick={'https://main--steady-druid-b31ab0.netlify.app/brand'}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" onClick={'https://main--steady-druid-b31ab0.netlify.app/brand'}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" onClick={'https://main--steady-druid-b31ab0.netlify.app/brand'}/>
        </SwiperSlide>
      </Swiper>
    </div>
          </div>

  );
};

export default Portfolio;
