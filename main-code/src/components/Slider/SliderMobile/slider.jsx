"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import p1 from "/public/p1.jpg";
import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";
import "./styles.css";
import { EffectCards } from "swiper/modules";

export default function App() {
  return (
    <div className="mt-12 md:hidden">
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
          <Image src={p1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={p1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={p1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={p1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={p1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={p1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={p1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={p1} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
