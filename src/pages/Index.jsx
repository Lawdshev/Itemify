import React from 'react';
import Heroe from '../Components/Heroe/Heroe'
import line from '../assets/Line 2.png';
import icon4 from '../assets/Vector.png'
import icon2 from '../assets/Group2.png'
import icon3 from '../assets/Group.png'
import icon1 from '../assets/group4.png'
import icon6 from '../assets/Vector (6).png'
import icon5 from '../assets/Vector55.png'
import AboutCard from '../Components/AboutCard';
import styles from '../Styles/index.module.css';
import FeatureCard from '../Components/FeatureCard';
import triangle from '../assets/Vector 1.png'
import quote from '../assets/quote.png'
import vid from '../assets/dark-skinned-woman-colleagues-corporate-start-up-office-working-finish-project-diverse-team-business-people-analyzing-company-financial-reports-from-computer 1.png';
import vector1 from '../assets/Vector (1).png';
import vector2 from '../assets/Vector (2).png';
import vector3 from '../assets/Vector (3).png';
import vector4 from '../assets/Vector (4).png';
import vector5 from '../assets/Vector (5).png';
import vector6 from '../assets/Vector(6).png';
import NewsCard from '../Components/NewsCard';
import news1 from "../assets/Rectangle 45.png";
import news2 from "../assets/Rectangle 46.png";
import news3 from "../assets/Rectangle 47.png";

// news
const news =[
  {
    img: news1
  },
  {
    img: news2
  },
  {
    img: news3
  },
]
// About cards content
const about = [
  {
    icon: icon1,
    text:' Automatically builds alternate fixed forms from item and test criteria specified',
  },
  {
    icon: icon2,
    text:' Supports multiple types of test forms: multiple choice tests, fixed form, LOFT ',
  },
  {
    icon: icon3,
    text:'Provides item and exam QA tools to ensure tests meet professional standards and candidate expectation ',
  },
  {
    icon: icon4,
    text:'Allows for multiple versions of the same item to co-exist with ability to deliver either version',
  },
  {
    icon: icon5,
    text:'Integrates features for client and committee item review ',
  },
  {
    icon: icon6,
    text:'Allows for reviewers to see items with content/blueprint areas, item and option stats, feedback (both client and candidate), reference sources, and other metadata.',
  },
]

// Features Card content
const features = [
  {
    icon : vector4,
    head : 'WORKFLOW MANAGEMENT',
    text: 'Ensure that items meet your quality standards by establishing a custom workflow'
  },
  {
    icon : vector6,
    head : 'CHANGE TRACKING & VERSIONING',
    text: 'Helps you track all changes and displays them in an item history report'
  },
  {
    icon : vector1,
    head : 'POWERFUL SEARCHING',
    text: 'Search for items based on any metadata field – extremely useful for form assembly'
  },
  {
    icon : vector2,
    head : 'COMPREHENSIVE METADATA',
    text: 'Classical statistics, content area, description, author, date created – and many more, plus any custom fields you create'
  },
  {
    icon : vector5,
    head : 'FACILITATE COLLABORATION',
    text: 'Manage bias, psychometric, and content reviews with a configurable review module'
  },
  {
    icon : vector3,
    head : 'ADVANCED PSYCHOMETRICS',
    text: 'Import item statistics and use them to review items and assemble parallel test forms'
  },
]

function Index() {
  return (
    <div>
        <Heroe/>
        {/* about */}
      <div className={`mt-[8%] flex flex-col md:h-[100vh] lg:h-[70vh] xl:h-[100vh] px-8 py-4 md:py-0 md:px-0 ${styles.aboutContainer}`}>
        <h6 className='font-poppins text-[18px] md:text-[25px] font-[600] leading-[38px] text-center text-[#E9AD11] 3xl:text-[35px] 4xl:text-[40px]'>About Our Product</h6>
        <h1 className='font-poppins text-[20px] md:text-[35px] text-[#535252] font-[800] leading-[30px] md:leading-[53px] text-center mt-[1.5%] md:px-[8%] 3xl:text-[45px] 4xl:text-[50px] '>Make informed, data-driven decisions with tailored item bank reporting</h1>
        <p className='font-poppins text-[12px] md:text-[15px] font-[400] leading-[22.6px] text-center mt-[5%] px-[8%] text-[#535252] 3xl:text-[20px] 4xl:text-[25px]'>This solution automates the entire item authoring process thus enabling a more standardized and scalable environment essential to developing and maintaining effective test/exams.</p>
        <img src={line} alt="" className='self-center mt-[3%]' />
        <div className=' flex flex-wrap '>
          {
             about.map(feature=>{
              return <AboutCard {...feature}/>
             })
          }
        </div>
      </div>
      
      {/* why us */}
      <div className={` md:h-[50vh] lg:h-[40vh]  xl:h-[60vh] justify-around md:justify-center items-center bg-[#d9d9d944] flex flex-col-reverse md:flex-row ${styles.whyContainer} py-[10%] md:py-0`}>
          <div className='md:w-[40%] md:h-[70%] mr-[2.5%] flex mt-[70%] md:mt-0 flex-col justify-between px-8 md:px-0'>
            <h3 className='font-poppins font-[600] text-[18px] leading-[27px] text-[#E9AD11] 3xl:text-[22px] 4xl:text-[25px]'>
              Why Choose Us?
            </h3>
            <h1 className='font-poppins font-[800] text-[20px] md:text-[24px] lg:text-[28px] leading-[42px] text-[#535252] 3xl:text-[32px] 4xl:text-[36px]'>
              Some Words About Us
            </h1>
            <p className={`font-poppins font-[400] text-[13px] 3xl:text-[20px] 3xl:leading-[35px] 4xl:text-[25px] 4xl:leading-[45px] 5xl:leading-[55px] leading-[27px] ${styles.whyText}`}>This is an item banking system that manages the process of: item authoring, reviewing and test assembly. It is designed to be used by professionals and test developers, teachers and educators on classroom based assessments. Moreover, it is designed with a package of features created specifically to make item and test development easier, faster, user-friendly and more cost effective.</p>
            <button className='bg-[#E7BB49] py-[2.5%] w-[50%] md:w-[40%] lg:w-[30%] xl:w-[25%] rounded-lg mt-[2%] text-white font-openSans font-[700] leading-[22px] text-[16px] 3xl:text-[20px] 4xl:text-[25px]'>Request Demo</button>
          </div>
          <div className={`w-[90%] md:w-[40%] md:h-[70%] ml-[2.5%] md:mt-[10%] xl:mt-0 relative ${styles.vidDiv}`}>
            <img src={triangle} alt="" className='absolute top-0 right-0' />
            <img src={vid} alt="" className={`absolute z-10 top-[12px] right-[3%] w-[95%] ${styles.vidImg}`} />
          </div>
      </div>


        {/* main features */}
         <div className={`${styles.features} py-[10%] lg:py-0 lg:h-[70vh] xl:h-[100vh] flex items-center justify-center`}>
         <div className={` py-[10%] lg:py-0 lg:h-[70vh] xl:h-[100vh] flex items-center justify-center bg-[#111111d8]`}>
            <div className='h-[90%] w-[95%] flex flex-col justify-between '>
                <div className='flex flex-col h-[10%] w-full'>
                    <h1 className=' self-center text-[24px] 3xl:text-[32px] 4xl:text-[38px] md:text-[30px] text-[#E9AD11] font-poppins font-[600] leading-[45px]'>Main Features</h1>
                    <div className='h-[1px] w-[130px] bg-[#E9AD1169] self-center mt-3'></div>
                </div>
                <div className=' h-[90%] lg:h-[85%] w-full flex flex-wrap justify-between'>
                  {
                    features.map(feature => {
                      return <FeatureCard {...feature}/>
                    })
                  }
                 
                </div>
            </div>    
         </div>
         </div>

        {/* latest news */}
        <div className='lg:h-[100vh] w-full bg-[#FFFFFF] flex items-center justify-center my-[10%] lg:my-0'>
        <div className='h-[85%] w-full lg:w-[90%] flex flex-col justify-between'>
             <div className='flex flex-col h-[10%] w-full'>
                <h1 className=' self-center text-[24px] md:text-[30px] text-[#E9AD11] font-poppins font-[600] leading-[45px] 2xl:text-[36px] 2xl:leading-[56px]'>Latest News</h1>
                <div className='h-[1px] w-[130px] 2xl:w-[10%] bg-[#E9AD1169] self-center mt-3'></div>
             </div>
             <div className='h-[85%] flex flex-wrap justify-around'>
                {
                  news.map(news=>{
                    return <NewsCard {...news}/>
                  })
                }
             </div>
        </div>
    </div>

        {/* elearning */}
        <div className={`${styles.elearning} h-[50vh] md:h-[40vh] lg:h-[50vh] xl:h-[80vh] flex items-center justify-center`}>
            <div className='h-[90%] md:h-[70%] w-[90%] lg:h-[60%] lg:w-[80%] flex flex-col justify-between items-center '>
              <img src={quote}  className='lg:w-[66px] md:w-[50px] w-[44px] '/>
              <div className='flex flex-col h-[80%] md:h-[70%] lg:h-[70%] items-center justify-between'>
                <p className='font-poppins text-[12px] md:text-[15px] 3xl:text-[25px] 4xl:text-[35px] 3xl:leading-[35px] 4xl:leading-[40px] 5xl:leading-[45px] lg:text-[17px] leading-[18px] md:leading-[25.5px] font-[275] text-center text-[#FFFFFF] italic px-8'>It is true that eLearning has come to stay and our desire as learning institution has been fulfilled knowing we can deliver to our students from anywhere they are all round the year and thanks to ScholarRoom.</p>
                <div className='h-[56px] w-[1px] bg-[#FFFFFF] mt-7'></div> 
                <p className='text-[#E9AD11] font-semibold text-[15px] 3xl:text-[25px] 4xl:text-[35px] leading-[22px] mt-7'>Ogbonna Jessica</p>  
              </div>
            </div>
        </div>

        {/* JoinUs */}
        <div className='bg-[#F5F5F5] h-[311px] 2xl:h-[30vh] w-full flex justify-center items-center '>
        <div className=' w-full md:w-[90%] xl:w-[70%] h-[60%] flex flex-col items-center justify-between'>
            <p className='text-[#535252] font-poppins font-medium text-[12px] md:text-[17px] 3xl:text-[30px] 4xl:text-[35px] md:leading-[30px] lg:text-[24px] lg:leading-[36.19px] text-center px-3 md:px-0'>Make informed, data-driven decisions with our item banking solution</p>
            <p className='text-[#535252] font-poppins font-medium text-[12px] md:text-[17px] md:leading-[30px] lg:text-[24px] 3xl:text-[30px] 4xl:text-[35px] lg:leading-[36.19px]'>Contact Us To Get Started</p>
            <button className='bg-[#E9AD11] text-[#ffffff] font-openSans text-[16px] 3xl:text-[25px] 4xl:text-[30px] leading-[21.79px] w-[119px] 3xl:w-[200px] 3xl:h-[60px] h-[40px] 2xl:rounded-[10px] rounded-[5px]'>Join us</button>
        </div>
    </div>
    </div> 
    
  )
}
export default Index