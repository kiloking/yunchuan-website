import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
function Section06() {
  const imgs =[
    {image:"section06_p01.png"},
    {image:"section06_p02.png"},
    {image:"section06_p03.png"},
    {image:"section06_p04.png"},
    {image:"section06_p05.png"},
    {image:"section06_p06.png"},
    {image:"section06_p07.png"},
    {image:"section06_p08.png"},
    {image:"section06_p09.png"},
    {image:"section06_p10.png"},
    {image:"section06_p11.png"},
    {image:"section06_p12.png"},
    {image:"section06_p13.png"},
    {image:"section06_p14.png"},
    {image:"section06_p15.png"},
    {image:"section06_p16.png"},
    {image:"section06_p17.png"},
  ]
  return (
    <div
      className='w-full  aspect-video bg-cover bg-center bg-no-repeat py-6 relative'
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section_bg.png'})`,
      }}
    >
      <div className='w-1/3 mx-auto my-3 md:my-12' data-aos="fade-up" data-aos-duration="900">
        <img src={process.env.PUBLIC_URL+'/images/section06_title.png'} alt="" className='w-full' />
      </div>
      <div className='w-12/12 mx-auto flex justify-between items-center gap-20 py-10'>
        <Swiper
            spaceBetween={30}
            slidesPerView={1.5}
            breakpoints={{
              460:{
                slidesPerView:1.5
              },
              1024:{
                slidesPerView:4
              }
            }}
            loop={true}
            pagination={{
              clickable: true,
            }} 
            modules={[Pagination,Autoplay]}
            autoplay={{delay:2300}}
            centeredSlides={true}
            className='w-full'
          >
            {
              imgs.map((item,index)=>{
                return(
                  <SwiperSlide key={'s6'+index}><img src={process.env.PUBLIC_URL+'/images/patch2/'+ item.image} alt="" className='w-full' /></SwiperSlide>
                )
              })
            }
          </Swiper>
      </div>

    </div>
  )
}

export default Section06