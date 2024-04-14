import React, { useEffect } from 'react'

export default function Nopage(props) {
  useEffect(() => {
    props.setProgress(0);
    props.setProgress(30);
    props.setProgress(100);
  });
  return (
    <div className='w-[100vw] h-fit md:h-[100vh] bg-gradient-to-b from-[#00d1a9] via-[#6cc7e2] to-[#009e9a]'>
      <div className='grid place-items-center h-[100vh] w-[100vw]'>
        <div className='mt-16 w-[80vw] md:w-[50vw] md:mt-0 text-center shadow-yellow-400 bg-black bg-opacity-15 backdrop-blur-3xl font-bold p-[40px] my-3 mx-auto rounded-[20px] shadow-2xl h-fit text-[#fff9c7]'><div className='text-center text-white text-3xl font-bold'>Page not found</div>Click on QuickWind</div>
      </div>
    </div>
  )
}
