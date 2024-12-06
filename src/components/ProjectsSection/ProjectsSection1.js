//Μεθοδος swiper react

// Step 1: Import React
import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

// import Swiper core and required modules
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

const mySwiper = {
  borderWidth: "medium",
  borderStyle: "solid",
  borderRadius: "10px",
  paddingTop: "20px",
  paddingBottom: "20px",
  backgroundColor: "rgb(249 250 251)"
}

const mySwiperSlide = {
  backgroundColor: "rgb(249 250 251)",
  display: "flex",
  flexDirection: "column"
}

// Step 2: Define your component
const ProjectsSection1 = () => {
  return (
    <>
    <div className="mb-4 p-4 rounded-lg border border-gray-100 bg-gray-50">
      <h3 className="text-xl text-center md:text-left font-bold text-gray-800">Mobile App - Home Assistant</h3>
      <p className="mt-2 text-xl font-light text-center md:text-left text-gray-600 ">Εφαρμογή κινητού για τον έλεγχο μονοκατοικίας knx στην Φιλοθέη.</p>
    </div>

    <div className="flex justify-center items-center">

      <Swiper style={mySwiper}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'1'}
        loop={true}
        speed={'3000'}
        autoplay={{
          delay: 2500,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay ]}
        className="mySwiper"
      >
        <SwiperSlide style={mySwiperSlide}>
            <StaticImage src="../../images/projects/knx/ha1/mobile-app-ha-photo1.jpg" alt="mobile app home assistant"  placeholder="blurred" layout="constrained" quality={100} formats={["auto", "webp", "avif"]} />
            <p className="pb-5 font-semibold sm:text-xl text-neutral-600">Garage Doors</p>
        </SwiperSlide >
        <SwiperSlide style={mySwiperSlide}>
            <StaticImage src="../../images/projects/knx/ha1/mobile-app-ha-photo2.jpg" alt="mobile app home assistant" placeholder="blurred" layout="constrained" quality={100} formats={["auto", "webp", "avif"]} />
            <p className="pb-5 font-semibold sm:text-xl text-neutral-600">Pool</p>
        </SwiperSlide>
        <SwiperSlide style={mySwiperSlide}>
            <StaticImage src="../../images/projects/knx/ha1/mobile-app-ha-photo3.jpg" alt="mobile app home assistant" placeholder="blurred" layout="constrained" quality={100} formats={["auto", "webp", "avif"]} />
            <p className="pb-5 font-semibold sm:text-xl text-neutral-600">Bedroom</p>
        </SwiperSlide>
        <SwiperSlide style={mySwiperSlide}>
            <StaticImage src="../../images/projects/knx/ha1/mobile-app-ha-photo4.jpg" alt="mobile app home assistant" placeholder="blurred" layout="constrained" quality={100} formats={["auto", "webp", "avif"]} />
            <p className="pb-5 font-semibold sm:text-xl text-neutral-600">Underfloor Heating</p>
        </SwiperSlide>
        <SwiperSlide style={mySwiperSlide}>
            <StaticImage src="../../images/projects/knx/ha1/mobile-app-ha-photo5.jpg" alt="mobile app home assistant" placeholder="blurred" layout="constrained" quality={100} formats={["auto", "webp", "avif"]} />
            <p className="pb-5 font-semibold sm:text-xl text-neutral-600">Navigation Menu</p>
        </SwiperSlide>
        <SwiperSlide style={mySwiperSlide}>
            <StaticImage src="../../images/projects/knx/ha1/mobile-app-ha-photo6.jpg" alt="mobile app home assistant" placeholder="blurred" layout="constrained" quality={100} formats={["auto", "webp", "avif"]} />
            <p className="pb-5 font-semibold sm:text-xl text-neutral-600">Lights</p>
        </SwiperSlide>

      </Swiper>
    </div>
    </>
  )
}

  // Step 3: Export your component
  export default ProjectsSection1