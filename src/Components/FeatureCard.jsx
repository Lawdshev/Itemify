import React from 'react';

function FeatureCard({icon, head, text}) {
  return (
    <div className='flex lg:w-[32%] h-[30vh] md:w-1/2 m-5 md:mx-0 md:my-3 lg:m-0 lg:h-[45%] justify-around'>
        <div className='w-[90%] h-full flex flex-col items-center justify-around text-[#FFFFFF] font-poppins'>
            <img src={icon} className='w-[41px] h-[41px] text-[#E9AD11]'/>
            <h1 className='text-[17px] 3xl:text-[25px] 4xl:text-[30px] leading-[25.5px] font-semibold'>{head}</h1>
            <p className='text-center text-[15px] 3xl:text-[20px] 4xl:text-[25px] 3xl:leading-[30px] 4xl:leading-[35px] 5xl:leading-[45px] leading-[25.5px] font-normal'>{text}</p>
            <div className='h-[1px] w-[90%] bg-[#FFFFFF42] self-center'></div>
        </div>
        <div className='w-[1px] h-[95%] bg-[#FFFFFF42] '></div>
    </div>
  )
}

export default FeatureCard