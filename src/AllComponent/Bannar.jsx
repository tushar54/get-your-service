// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../assets/bannarphoto/img1.jpg'
import img2 from '../assets/bannarphoto/img2.jpg'
import img3 from '../assets/bannarphoto/img3.jpg'
import img4 from '../assets/bannarphoto/img4.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Bannar() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-[550px] overflow-hidden "
      >
        <SwiperSlide
          className="bg-cover bg-center w-full h-full "
          style={{ backgroundImage: `url(${img1})` }}
        ><div className='font-bold flex justify-center items-center w-full h-full text-center text-white text-3xl'>You Can Choose Any Service <br></br>.And We Hope That You Will be Staisfy.</div>
          {/* Optional content inside the slide */}
        </SwiperSlide>

        <SwiperSlide
          className="bg-cover bg-center w-full h-full"
          style={{ backgroundImage: `url(${img2})` }}
        ><div className='font-bold flex justify-center items-center w-full h-full text-center text-white text-3xl'>You Can Choose Any Service <br></br>.And We Hope That You Will be Staisfy.</div>
          {/* Optional content inside the slide */}
        </SwiperSlide>

        <SwiperSlide
          className="bg-cover bg-center w-full h-full"
          style={{ backgroundImage: `url(${img3})` }}
        ><div className='font-bold flex justify-center items-center w-full h-full text-center text-white text-3xl'>You Can Choose Any Service <br></br>.And We Hope That You Will be Staisfy.</div>
          {/* Optional content inside the slide */}
        </SwiperSlide>

        <SwiperSlide
          className="bg-cover bg-center w-full h-full"
          style={{ backgroundImage: `url(${img4})` }}
        ><div className='font-bold flex justify-center items-center w-full h-full text-center text-white text-3xl'>You Can Choose Any Service <br></br>.And We Hope That You Will be Staisfy.</div>
          {/* Optional content inside the slide */}
        </SwiperSlide>

        


      </Swiper>

      <div></div>
    </>
  );
}
