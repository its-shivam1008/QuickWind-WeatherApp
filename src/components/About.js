import React, { useEffect } from 'react'

export default function About(props) {
  useEffect(() => {
    props.setProgress(0);
    props.setProgress(30);
    props.setProgress(100);
  });
  return (
    <div className='w-[100vw] h-fit md:h-[120vh] bg-gradient-to-b from-[#00d1a9] via-[#6cc7e2] to-[#009e9a]'>
      <div className='grid place-items-center h-fit md:h-[100vh] w-[100vw]'>
        <div className='mt-16 w-[80vw] md:w-[50vw] md:mt-0 text-center shadow-yellow-400 bg-black bg-opacity-15 backdrop-blur-3xl font-bold p-[40px] my-3 mx-auto rounded-[20px] shadow-2xl h-fit text-[#fff9c7]'><div className='text-center text-white text-3xl font-bold'>About</div>QuickWind, developed by Shivam Shukla, stands out as a comprehensive weather app that seamlessly integrates essential features for users seeking accurate and detailed weather information. The app goes beyond merely offering current weather updates, extending its functionality to provide a robust seven-day forecast. Users can plan their activities with confidence, armed with insights into upcoming weather conditions.

What sets QuickWind apart is its historical weather data feature, enabling users to dive into past weather patterns on specific dates. Moreover, QuickWind prioritizes health-conscious living by incorporating Air Quality Index (AQI) information. This valuable data empowers users to consider air quality alongside weather conditions, promoting well-informed choices for outdoor activities.

In a fast-paced world, QuickWind emerges as a reliable companion, offering a holistic weather experience that combines real-time updates, extended forecasts, historical insights, and crucial air quality data—all in one intuitive interface.</div>
      </div>
    </div>
  )
}
