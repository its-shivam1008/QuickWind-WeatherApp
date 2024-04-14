import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className='text-white absolute w-[100%] z-[9999] px-[0.9rem] py-[0] top-0 left-0'>
      <nav className=' max-w-[1300px] my-0 mx-auto py-0 px-auto flex justify-between items-center'>
        <Link to="/"><div className='text-4xl  hover:text-[#dcf13b] tracking-wide  leading-tight text-shadow-md font-bold'>
          QuickWind
        </div></Link>
        <ul className='flex  space-x-2 md:space-x-5 py-3'>
          <li><Link to="/contact" className=' transition-color duration-500 md:text-xl hover:text-[#dcf13b] font-semibold'>Contact me</Link></li>
          <li><Link to="/about" className=' transition-color duration-500 md:text-xl hover:text-[#e2f937] font-semibold'>About</Link></li>
        </ul>
      </nav>
    </header>
  )
}
