import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";
import { motion } from "framer-motion";
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'



export default function App() {
  const rows = [
    {
      title: "Makan",
      img: img1,
    },
    {
      title: "Minum",
      img: img2,
    },
    {
      title: "Tidur",
      img: img3,
    },
  ];
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(https://img.freepik.com/free-vector/pixel-art-game-background-grass-sky-clouds_210544-60.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        {rows.map(({ title, img }, index) => (
          <SwiperSlide>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center ",
                margin: "10vw auto",
              }}
            >
              <div>
                <motion.div
                  className="title"
                  data-swiper-parallax="-300"
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                  initial={{ y: -200, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    bounce: 0.4,
                    delay: 0.6,
                    duration: 0.5,
                  }}
                >
                  {title}
                </motion.div>
                <motion.div
                  className="subtitle"
                  data-swiper-parallax="-200"
                  initial={{ x: -200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    bounce: 0.4,
                    delay: 0.8,
                    duration: 0.5,
                  }}
                >
                  Subtitle
                </motion.div>
                <div className="text" data-swiper-parallax="-100">
                  <motion.p
                    initial={{ x: -400, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      bounce: 0.4,
                      delay: 1,
                      duration: 1,
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                    nec. Nulla laoreet justo vitae porttitor porttitor.
                    Suspendisse in sem justo. Integer laoreet magna nec elit
                    suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem
                    at elit facilisis rutrum. Ut at ullamcorper velit. Nulla
                    ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero.
                    Aenean feugiat non eros quis feugiat.
                  </motion.p>
                </div>
              </div>
              <div>
                <motion.img
                  src={img}
                  alt=""
                  style={{ width: "20vw", height: "20vw" }}
                  initial={{ y: -500, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "tween",
                    bounce: 0.4,
                    delay: 1,
                    duration: 1,
                  }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
