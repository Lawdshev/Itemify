import React from 'react';
import logo from '../assets/Itemify-logo-3.png'

function LargeNav() {
  return (
    <div>
        <div className='w-[100vw] md:flex flex-row hidden items-center lg:pl-[5%] lg:pr-[10%] justify-between fixed top-0 landscape:flex left-0 right-0 bg-white z-[99] 3xl:py-[1%] largeNav '>
        <div >
          <img src={logo} alt="" />
        </div>
        <div className='flex flex-row items-center justify-between w-[45%] font-openSans text-[16px] font-[700] leading-[22px] 3xl:text-[24px]'>
              <p >About</p>
              <p >Blog</p>
              <p >Contact</p>
              <p >FAQ</p> 
        </div>
        <button className=' px-3 bg-[#E7BB49] w-[11%] 3xl:w-[12%] xl:w-[8%] h-[40px] 3xl:h-[60px] md:mr-[2%] lg:mr-0 rounded-md text-white font-openSans text-[16px] font-[700] leading-[22px] hover:bg-[#E9AD11] 3xl:text-[24px] joinUsBtn2'>Join us</button>
      </div>
    </div>
  )
}

export default LargeNav;