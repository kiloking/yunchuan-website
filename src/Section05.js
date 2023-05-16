import React from 'react'

function Section05() {
  return (
    <div className='flex '>
      <div className='w-full'>
        <img src={process.env.PUBLIC_URL+'/images/section05_text.png'} alt="" className='w-full' data-aos="fade" data-aos-duration="900"/>
      </div>
      <div className='w-full bg-black'>
        <img src={process.env.PUBLIC_URL+'/images/section05_p01.png'} alt="" className='w-full' data-aos="fade" data-aos-duration="900" data-aos-delay="500"/>
      </div>
    </div>
  )
}

export default Section05