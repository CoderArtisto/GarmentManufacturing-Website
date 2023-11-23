"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import p1 from "/public/ProductImages/p1.jpeg";
import p2 from "/public/ProductImages/p2.jpeg";
import p3 from "/public/ProductImages/p3.jpeg";
import p4 from "/public/ProductImages/p4.png";
import p5 from "/public/ProductImages/p5.jpeg";
import p6 from "/public/ProductImages/p6.jpeg";
import p7 from "/public/ProductImages/p7.jpeg";
import p8 from "/public/ProductImages/p8.jpeg";
import p9 from "/public/ProductImages/p9.jpeg";
import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";
import "./styles.css";
import { EffectCards } from "swiper/modules";

export default function App() {
  return (
    <div className="mt-12 md:hidden">
      <h1 className="text-3xl text-white text-center font-bold mb-6">
        We Manufacture a wide range of Garments
      </h1>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={p1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={p2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={p3} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={p4} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={p5} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={p6} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={p7} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={p8} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={p9} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
