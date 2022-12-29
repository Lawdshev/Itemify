import React,{useState} from 'react';
import logo from '../../assets/Itemify-logo-3.png'
import '../Navbar/Navbar.css'

function Navbar() {
  const [sidebar,setSidebar] = useState(false);
   
  const toggleNavbar = () => {
    setSidebar(!sidebar)
  }

  return (
    <div className='bg-white mt-[15%] md:mt-[0] md:hidden'>
    <div className='absolute right-5 z-20 block top-4 bar md:hidden' onClick={toggleNavbar}>
        <i className="fa-solid fa-bars text-black text-[20px] " ></i>
    </div>
    <p to='/' className='bg-white w-full'>
        <img src={logo} className="w-[30%] top-[1%] absolute md:top-[1%] lg:top-[0] xl:top-0 z-20 md:w-[20%] lg:w-[16%] ml-[3.5%] logo 2xl:w-[10%] mb-4 "  />
    </p>
    <div className={sidebar ? 'nav active' : 'nav'}>
        <div className='navbars'>
            <div className="navItemsDiv cursor-pointer" onClick={toggleNavbar}>
                <p to='/about' className='navItems'>About</p>
                <p className='navItems'>Blog</p>
                <p className='navItems'>Contact</p>
                <p className='navItems'>FAQ</p>
            </div>
            <button className='joinUsBtn '>Join us</button>
        </div>
    </div>
    </div>
  )
}
export default Navbar;

