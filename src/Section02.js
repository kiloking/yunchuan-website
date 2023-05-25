import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
function Section02() {
  const imgs =[
    {image:"section02_p01.png"},
    {image:"section02_p02.png"},
    {image:"section02_p03.png"},
    {image:"section02_p04.png"},
    {image:"section02_p05.png"},
    {image:"section02_p06.png"},
  ]
  return (
    <div 
      className='w-full  aspect-video bg-cover bg-center bg-no-repeat py-6 relative'
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section_bg.png'})`,
      }}
    >
      <div className='w-9/12 p-4 md:p-12'>
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
                <SwiperSlide><img src={process.env.PUBLIC_URL+'/images/section02/'+ item.image} alt="" className='w-full' /></SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
      <div className=' absolute right-0 bottom-5 w-4/12 z-10' data-aos="fade-up" data-aos-duration="900">
        <img src={process.env.PUBLIC_URL+'/images/section02_c01.png'} alt="" className='w-4/5 absolute -top-40'/>
        <img src={process.env.PUBLIC_URL+'/images/section02_text.png'} alt=""  className='w-full'/>
      </div>


    </div>
  )
}

export default Section02