
import React, { useEffect, useState } from 'react'
import "./styles.css"
import { BiMenu, BiMenuAltLeft } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scroll]);


  return (
    <div className={`${scroll ? 'header flex md:justify-between lg:px-[100px]  md:py-5 md:bg-white md:px-[60px]  fixed w-full md:shadow-md' : 'header flex md:justify-between md:px-[60px] lg:px-[120px]  md:py-5 md: md:shadow-md md:text-white font-semibold'}`}>
          
          <a href="" className='logo'><div className='w-15 h-5 md:w-40 md:h-10'><img src="../bl.png" alt="logo image" className='w-full h-full object-cover'/></div></a>
          <input type="checkbox" id="check"className='hidden'/>
            <label htmlFor="check" className='md:hidden absolute right-[12px] mt-[2px]  icons'>
                <BiMenu id="menu" className='text-[18px] text-black'/>
                <CgClose id="close" className='hidden text-[18px] text-black'/>
            </label>
          <nav className='navbar md:flex md:gap-4 md:mt-2'>
            
            <Link to="about"smooth={true} duration={2000}><a className='font-semibold text-md  md:cursor-pointer '><NavLink  to="/about"className="cursor-pointer" activeClassName="about">ABOUT US</NavLink></a></Link>
             <Link to='what'smooth={true} duration={2000}><a className='font-semibold text-md  md:cursor-pointer '> <NavLink to="/whatWeDo"className="cursor-pointer"> WHAT WE DO</NavLink></a></Link>
            <Link to="projects"smooth={true} duration={2000} ><a className='font-semibold text-md  md:cursor-pointer '> <NavLink to="/projects"className="cursor-pointer">PROJECTS</NavLink></a></Link>
            <Link to="team"smooth={true} duration={2000}><a className='font-semibold text-md  md:cursor-pointer '> <NavLink to="/team"className="cursor-pointer">TEAM</NavLink> </a></Link>
            <Link to="resources" smooth={true} duration={2000}><a className='font-semibold text-md  md:cursor-pointer '> <NavLink to="/resources"className="cursor-pointer">RESOURCES</NavLink></a></Link>
            <a className='font-semibold text-md  md:cursor-pointer'> <NavLink to="/donate"className="cursor-pointer ">DONATE</NavLink></a>
          </nav>
    </div>
  )
}

export default Navbar