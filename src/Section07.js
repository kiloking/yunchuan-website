import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
function Section07() {
  const imgs =[
    {image:"section07_p01.png"},
    {image:"section07_p02.png"},
  ]
  return (
    <div 
      className='w-full  aspect-video bg-cover bg-center bg-no-repeat py-6 relative'
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section_bg.png'})`,
      }}
    >

        <div className='w-5/12 pl-16 z-20 relative top-14'>
          <img src={process.env.PUBLIC_URL+'/images/section07_text.png'} alt="" className='w-full'/>
        </div>
        <div  className='w-8/12 absolute right-0 bottom-0 z-0'>
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
                  <SwiperSlide><img src={process.env.PUBLIC_URL+'/images//section07/'+ item.image} alt="" className='w-full' /></SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>


    </div>
  )
}

export default Section07