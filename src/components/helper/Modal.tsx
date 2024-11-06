import React from 'react'

export default function Modal() {
  return (
    <div className='relative'>
      <div className='fixed top-0 right-0 bottom-0 left-0 bg-[#000000e1] z-20'/>
      {/* Main modal */}
      <div className='fixed top-[50%] left-[50%] right-[50%] bottom-[50%] md:h-[300px lg:w-[800px] lg:-[500px] z-[21] traslate-y-[50%]'>
        <iframe
          src='https://www.youtube.com/watch?v=Pir8IUxfVdU&t=2s'
          className='w-full h-full'
        >
        </iframe>
      </div>
    </div>
  )
}

