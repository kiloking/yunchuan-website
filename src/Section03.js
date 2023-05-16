import React from 'react'

function Section03() {
  return (
    <div className='flex items-center justify-center p-8 md:p-14 gap-20'>
      <div className='w-2/12'>
        <img src={process.env.PUBLIC_URL+'/images/section03_text.png'} alt="" className='w-full' data-aos="fade-up" data-aos-duration="500"/>
      </div>
      <div className='w-8/12'>
        <img src={process.env.PUBLIC_URL+'/images/section03_p01.png'} alt="" className='w-full' data-aos="fade-up" data-aos-duration="500" data-aos-delay="500"/>
      </div>
    </div>
  )
}

export default Section03