import React,{useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
import { motion } from "framer-motion";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
function Section04() {
  const [currentIndex, setCurrentIndex] = useState(0) 
  const imgs =[
    {image:"section04_p01.png",title:"section04_p01_title.png"},
    {image:"section04_p02.png",title:"section04_p02_title.png"},
  ]
  return (
    <div className='py-8 md:py-12 relative'>
      <div className='flex justify-between items-end gap-12'>
        <div className='w-[47%]  relative'>
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
            onSlideChange={(swiperCore)=>{
              const {activeIndex, snapIndex, previousIndex, realIndex} = swiperCore;
              setCurrentIndex(realIndex)
            }}
          >
            {
              imgs.map((item,index)=>{
                return(
                  <SwiperSlide className=''>
                    <img src={process.env.PUBLIC_URL+'/images/section04/'+ item.image} alt="" className='w-full' />
                   
                  </SwiperSlide>
                )
              })
            }
            
          </Swiper>
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0,x:0 }}
            animate={{ opacity: 1,x:0 }}
            transition={{
              ease: "easeInOut",
              duration: .6,
              delay: 0.1,
            }}
            className=' absolute -right-20 bottom-0 z-10 w-14 '>
              <img src={process.env.PUBLIC_URL+'/images/section04/'+imgs[currentIndex].title} alt="" />
          </motion.div>
        </div>
        <div className='w-4/12'>
          <img src={process.env.PUBLIC_URL+'/images/section04_text.png'} alt="" className='w-full'/>
        </div>
      </div>
      <div className=' absolute left-0 bottom-0 w-7/12'>
        <img src={process.env.PUBLIC_URL+'/images/section04_bg2.png'} alt="" className='w-full'/>
      </div>
    </div>
  )
}

export default Section04