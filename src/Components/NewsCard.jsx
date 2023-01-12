import React from 'react';
import styles from '../Styles/index.module.css'

function NewsCard({img}) {
  return (
    <div className={`${styles.newsCard} w-4/5 m-7 lg:m-0 mx-auto md:mx-0 md:w-[334px] xl:h-[auto] 2xl:w-[30%] h-[448px] flex flex-col justify-between bg-[#FFFFFF]`}>
        <img src={img} className='w-full md:h-[50%]' />
        <div className='flex w-[70%] h-[5%] justify-between px-4 2xl:px-8 font-poppins text-[12px] leading-[18px] 2xl:text-[20px] 2xl:leading-[22px] 4xl:text-[24px] 4xl:leading-[25px]'>
            <p className='text-[#E9AD11]'>By Admin</p>
            <p className='text-[#535252]'>06 Aug 2022</p>
        </div>
        <p className='px-7 2xl:px-14 text-center text-[15px] leading-[25px] xl:mb-[10%] text-[#111111BF] h-[20%] w-full self-center 2xl:text-[24px] 2xl:leading-[32px] 4xl:text-[24px] 5xl:text-[30px] 4xl:leading-[38px]'>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the dummy text ever</p>
        <button className={`bg-[#E9AD11] text-[#F5F5F5] text-[16px] leading-[22px] font-openSans font-bold rounded-[10px] w-[150px] 2xl:w-[30%] 2xl:h-[10%] 2xl:text-[20px] 4xl:text-[24px] h-[50px] self-center -mb-[5%] ${styles.read}`}> <span className='main'>Read More</span> <i class="fa-solid fa-arrow-right-long text-[25px] hidden"></i> </button>
    </div>
  )
}

export default NewsCard