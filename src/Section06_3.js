import React from 'react'
import ReactPlayer from 'react-player'
function Section06_3() {

  return (
    <div className='flex '>
      <div className='w-full flex items-center aspect-video  md:min-h-screen relative'>
      <ReactPlayer
          className='react-player '
          url='https://youtu.be/fbsgMpqk76c'
          width='100%'
          height='100%'
        />

      </div>



      
    </div>
  )
}

export default Section06_3