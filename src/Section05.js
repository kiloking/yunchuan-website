import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
function Section05() {
  const imgs =[
    {image:"section05_p01.png"},
    {image:"section05_p02.png"},
  ]
  return (
    <div className='flex '>
      <div className='w-full bg-[#ac282c]'>
        <img src={process.env.PUBLIC_URL+'/images/section05_text.png'} alt="" className='w-full' data-aos="fade" data-aos-duration="900"/>
      </div>

      <div className='w-[53%] bg-black'>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }} 
          modules={[Pagination,Autoplay]}
          autoplay={{delay:2000}}
          centeredSlides={true}
          className='w-full'
        >
          {
            imgs.map((item,index)=>{
              return(
                <SwiperSlide><img src={process.env.PUBLIC_URL+'/images/section05/'+ item.image} alt="" className='w-full' /></SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
      
    </div>
  )
}

export default Section05