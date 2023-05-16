import React from 'react'

function Section06() {
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
      <div className='w-10/12 mx-auto flex justify-between items-center gap-20 py-10'>
        <div className='w-1/3' data-aos="fade" data-aos-duration="900"><img src={process.env.PUBLIC_URL+'/images/section06/section06_p01.png'} alt="" className='w-full' /></div>
        <div className='w-1/3' data-aos="fade" data-aos-duration="900"><img src={process.env.PUBLIC_URL+'/images/section06/section06_p02.png'} alt="" className='w-full' /></div>
        <div className='w-1/3' data-aos="fade" data-aos-duration="900"><img src={process.env.PUBLIC_URL+'/images/section06/section06_p03.png'} alt="" className='w-full' /></div>
      </div>

    </div>
  )
}

export default Section06