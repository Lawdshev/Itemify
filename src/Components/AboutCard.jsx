import React from 'react'

function AboutCard({icon,text}) {
  return (
    <div className=' py-3 md:py-0 md:w-[27%] lg:w-[24%] md:h-[50%] lg:h-[50%] xl:h-[45%] md:ml-[5%] lg:ml-[7%] mt-[5%] flex flex-col rounded-[10px] text-[#535252]  hover:bg-[#111111E3] hover:text-white' style={{boxShadow: `0px 16px 40px rgba(117, 142, 254, 0.25)`}}>
        <div className='w-[100px] h-[100px] bg-[#E7BB4926] rounded-full flex items-center justify-center mx-auto mt-[3%]'>
            <img src={icon} alt="" />
        </div>
        <p className='w-[80%] mt-[7%] self-center font-[400] font-poppins text-[14px] 3xl:text-[20px] 4xl:text-[25px] leading-[21px] 3xl:leading-[30px] 4xl:leading-[35px] 5xl:leading-[45px]'>{text}</p>
    </div>
  )
}
export default AboutCard;