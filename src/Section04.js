import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
function Section04() {
  const imgs =[
    {image:"section04_p01.png"},
    {image:"section04_p02.png"},
  ]
  return (
    <div className='py-8 md:py-12 relative'>
      <div className='flex justify-between items-end gap-12'>
        <div className='w-[47%] '>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
            }} 
            modules={[Pagination,Autoplay]}
            autoplay={{delay:1800}}
            centeredSlides={true}
            className='w-full'
          >
            {
              imgs.map((item,index)=>{
                return(
                  <SwiperSlide><img src={process.env.PUBLIC_URL+'/images/section04/'+ item.image} alt="" className='w-full' /></SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
        <div className='w-4/12'>
          <img src={process.env.PUBLIC_URL+'/images/section04_text.png'} alt="" className='w-full'/>
        </div>
      </div>
      <div className=' absolute left-0 bottom-0 w-7/12'>
        <img src={process.env.PUBLIC_URL+'/images/section04_bg.png'} alt="" className='w-full'/>
      </div>
    </div>
  )
}

export default Section04