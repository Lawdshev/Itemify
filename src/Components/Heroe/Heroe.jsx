import React from 'react';
import heroStyles from './Heroe.module.css'

function Heroe() {
    return (
      <div className={`bg-black   ${heroStyles.container}`} >
          <div className={` xl:px-0 ${heroStyles.overlay}`}>
            <div className='text-white w-full xl:w-[73%] h-[70%] md:h-[50%] lg:h-[40%] flex flex-col items-center justify-between'>
              <h1 className='font-poppins font-[700] text-[20px] md:text-[36px] 4xl:text-[45px] leading-[26px] md:leading-[45px] text-center'>Efficiently Manage Your Team, Manage the workflow of items, authors, and reviewers</h1>
              <p className='font-poppins text-[16px] md:text-[20px] 4xl:text-[30px] font-[400] leading-[20px] md:leading-[27px] text-center'>Built with a flexible workflow management module that is designed to manage large numbers of item</p>
              <div className='w-full flex justify-center'>
                <button className='md:w-[20%] lg:w-[15%] px-2 lg:h-full py-3 md:py-5 4xl:py-10 bg-white mr-3 4xl:mr-8 text-[#E9AD11] rounded-lg font-openSans text-[12px] md:text-[16px] 4xl:text-[25px] font-[700] leading-[22px] hover:bg-[#E9AD11] hover:text-white 4xl:w-[20%]'>
                    Get Started
                  </button>
                  <button className='md:w-[20%] lg:w-[15%] 4xl:w-[20%] px-2 lg:h-full py-3 md:py-5 bg-[#E7BB49] text-white ml-3 rounded-lg font-openSans text-[12px] md:text-[16px] 4xl:text-[25px] font-[700] leading-[22px] hover:bg-white hover:text-[#E9AD11] 4xl:ml-8'>
                    Learn More
                  </button>
              </div>
            </div>
          </div>
      </div>
    )  
}
export default Heroe;


