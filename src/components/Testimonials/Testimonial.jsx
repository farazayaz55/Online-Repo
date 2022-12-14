import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
// import profilePic1 from "../../img/profile1.jpg";
// import profilePic2 from "../../img/profile2.jpg";
// import profilePic3 from "../../img/profile3.jpg";
// import profilePic4 from "../../img/profile4.jpg";
import movieland from "../../img/movieland.PNG";
import Blockly from "../../img/blockly.PNG";
import farazEcommerce from "../../img/faraz-ecommerce.PNG";
import MusicApp from "../../img/musicapp.png";
const Testimonial = () => {
  const clients = [
    {
      img: movieland,
      review:
        "A movie Land Project in reactJS . displaying all data Using REST API.",
    },
    {
      img: Blockly,
      review:
        "Contributed in Open Source Google Project Named Blockly. To help STEAM learning for students under the age of 13-18",
    },
    {
      img: farazEcommerce,
      review:
        "A complete MERN Stack e-commerce project with Admin Panel, Images hosting on cloudinary.",
    },
    {
      img: MusicApp,
      review:
        "A music player in MERN Stack. A user can upload music files and can listen to them in the player.."    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Projects </span>
        <span>Details </span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
