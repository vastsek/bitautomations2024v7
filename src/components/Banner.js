import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import '../styles/Banner.css'

// import required modules
import { Autoplay, FreeMode, } from 'swiper/modules'

export default function Banner() {
  return (
    <>
        <div className="relative py-6 px-4 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <h2 className="mb-4 text-xl md:text-3xl font-semibold text-center text-gray-800">Συνεργαζόμαστε με κορυφαίους προμηθευτές.</h2>
                <p className="text-xl font-light md:text-2xl text-center text-gray-600">Ένα μεγάλο ευχαριστώ στους συνεργάτες μας. Βοηθούν να συνεχίζουμε.</p>
            </div>
        </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        freeMode={true}
        loop={true}
        speed={5000}
        autoplay={{
            delay: 500,
            disableOnInteraction: false,
            }}
        breakpoints={{
            '960': {
              slidesPerView: 6,
              spaceBetween: 30,
              speed: 10000,
            },
            '728': {
                slidesPerView: 3,
                spaceBetween: 20,
                speed: 7000,
              },
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <StaticImage src="../images/banner/abb.png" title="ABB" alt="ABB Logo"  placeholder="blurred" layout="fixed" width={140} height={140} formats={["auto", "webp", "avif"]}/>
        </SwiperSlide>
        <SwiperSlide>
            <StaticImage src="../images/banner/comfort-click.png" title="ComfortClickK" alt="ComfortClick Logo"  placeholder="blurred" layout="fixed" width={140} height={140} formats={["auto", "webp", "avif"]}/>
        </SwiperSlide>
        <SwiperSlide>
            <StaticImage src="../images/banner/ekinex.png" title="ekinex" alt="ekinex Logo"  placeholder="blurred" layout="fixed" width={140} height={140} formats={["auto", "webp", "avif"]}/>
        </SwiperSlide>
        <SwiperSlide>
            <StaticImage src="../images/banner/home-assistant.png" title="Home Assistant" alt="Home Assistant Logo"  placeholder="blurred" layout="fixed" width={140} height={140} formats={["auto", "webp", "avif"]}/>
        </SwiperSlide>
        <SwiperSlide>
            <StaticImage src="../images/banner/theben.png" title="Theben" alt="Theben Logo"  placeholder="blurred" layout="fixed" width={140} height={140} formats={["auto", "webp", "avif"]}/>
        </SwiperSlide>
        <SwiperSlide>
            <StaticImage src="../images/banner/hitachi.png" title="HITACHI" alt="HITACHI Logo"  placeholder="blurred" layout="fixed" width={140} height={140} formats={["auto", "webp", "avif"]}/>
        </SwiperSlide>
        <SwiperSlide>
            <StaticImage src="../images/banner/paradox.png" title="PARADOX" alt="PARADOX Logo"  placeholder="blurred" layout="fixed" width={140} height={140} formats={["auto", "webp", "avif"]}/>
        </SwiperSlide>
        <SwiperSlide>
            <StaticImage src="../images/banner/hikvision.png" title="HIKVISION" alt="HIKVISION Logo"  placeholder="blurred" layout="fixed" width={140} height={140} formats={["auto", "webp", "avif"]}/>
        </SwiperSlide>
        <SwiperSlide>
            <StaticImage src="../images/banner/yeastar.png" title="YEASTAR" alt="YEASTAR Logo"  placeholder="blurred" layout="fixed" width={140} height={140} formats={["auto", "webp", "avif"]}/>
        </SwiperSlide>
        <SwiperSlide>
            <StaticImage src="../images/banner/yealink.png" title="YEALINK" alt="YEALINK Logo"  placeholder="blurred" layout="fixed" width={140} height={140} formats={["auto", "webp", "avif"]}/>
        </SwiperSlide>
        <SwiperSlide>
            <StaticImage src="../images/banner/ubiquiti.png" title="UBIQUITI" alt="UBIQUITI Logo"  placeholder="blurred" layout="fixed" width={140} height={140} formats={["auto", "webp", "avif"]}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}