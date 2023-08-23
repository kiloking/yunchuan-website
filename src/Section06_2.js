import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
function Section06_2() {
  const imgs =[
    {image:"section05_p01.png"},
    {image:"section05_p02.png"},
  ]
  return (
    <div className='flex '>
      <div className='w-[54.4%] bg-black flex items-center'>
        <img src={process.env.PUBLIC_URL+'/images/patch2/section06_2_p02.png'} alt="" className=' object-contain' />
      </div>
      <div className='w-1/2 bg-[#ac282c]'>
        <img src={process.env.PUBLIC_URL+'/images/patch2/section06_2_p01.png'} alt="" className='w-full object-contain' data-aos="fade" data-aos-duration="900"/>
      </div>


      
    </div>
  )
}

export default Section06_2