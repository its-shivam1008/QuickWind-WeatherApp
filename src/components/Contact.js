import React, { useEffect } from 'react'

export default function Contact(props) {
  useEffect(() => {
    props.setProgress(0);
    props.setProgress(30);
    props.setProgress(100);
  });
  return (
    <div className='w-[100vw] h-fit md:h-[100vh] bg-gradient-to-b from-[#00d1a9] via-[#6cc7e2] to-[#009e9a]'>
      <div className='grid place-items-center h-fit md:h-[100vh] w-[100vw]'>
        <div className='mt-16 w-[80vw] md:w-[50vw] md:mt-0 text-center shadow-yellow-400 bg-black bg-opacity-15 backdrop-blur-3xl font-bold p-[40px] my-3 mx-auto rounded-[20px] shadow-2xl h-fit text-[#fff9c7]'><div className='text-center text-white text-3xl font-bold mb-3'>Contact</div>Dear QuickWind User,<br />
<br />
We value your experience with our app! Your feedback is crucial in shaping QuickWind to better serve your needs. Please take a moment to share your thoughts by emailing us by clicking at <a className='hover:text-white text-yellow-400 transition-colors duration-300' href="mailto:saboteurshivam@gmail.com">MailMe</a> .Your insights will contribute to future enhancements, ensuring QuickWind remains a top-notch weather companion. Tell us about your experiences, suggest improvements, and help us tailor the app to exceed your expectations. Your input matters, and we appreciate your time in making QuickWind even more exceptional.
<br /><br />
Best Regards,
QuickWind</div>
      </div>
    </div>
  )
}
