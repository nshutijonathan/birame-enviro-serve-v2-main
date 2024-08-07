import React, { useEffect, useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import './styles.css';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setScroll(true);
    } else {
      setScroll(false);
    }

    // Determine which section is currently in view
    const sections = ['home', 'about', 'whatWeDo', 'projects', 'team', 'resource', 'donate'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
          // Update URL without triggering a page reload
          window.history.pushState(null, '', `/${section === 'home' ? '' : section}`);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Set initial active section based on URL
    const path = location.pathname.slice(1);
    if (['about', 'whatWeDo', 'projects', 'team', 'resource', 'donate'].includes(path)) {
      setActiveSection(path);
    } else {
      setActiveSection('home');
    }
  }, [location.pathname]);

  const navLinkStyle = (path) => {
    const isActive = (path === '/' && activeSection === 'home') || 
                     (path !== '/' && location.pathname === path) || 
                     `/${activeSection}` === path;
    return {
      color: isActive ? 'rgb(134, 239, 172)' : scroll ? 'black' : 'white',
      fontWeight: 'semibold',
      fontSize: '1.3rem',
      cursor: 'pointer',
    };
  };

  const handleNavLinkClick = (to, section) => {
    navigate(to);
    setActiveSection(section);
    setIsNavbarOpen(false);
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const navItems = [
    { to: '/', text: 'HOME', section: 'home', hidden: true },
    { to: '/about', text: 'ABOUT US', section: 'about' },
    { to: '/whatWeDo', text: 'WHAT WE DO', section: 'whatWeDo' },
    { to: '/projects', text: 'PROJECTS', section: 'projects' },
    { to: '/team', text: 'WHO WE ARE', section: 'team' },
    { to: '/resource', text: 'RESOURCE', section: 'resource' },
    { to: '/donate', text: 'DONATE', section: 'donate' },
  ];

  return (
    <div
      className={`header flex md:justify-between lg:px-[100px] md:py-5 fixed w-full ${
        scroll ? 'md:bg-white md:shadow-md' : 'md:text-white'
      }`}
    >
      <a href="/" className="logo" onClick={(e) => {
        e.preventDefault();
        handleNavLinkClick('/', 'home');
      }}>
        <img
          src="../bl.png"
          alt="logo image"
          className="w-15 h-5 md:w-20 md:h-12"
        />
      </a>
      <input 
        type="checkbox" 
        id="check" 
        className="hidden" 
        checked={isNavbarOpen}
        onChange={toggleNavbar}
      />
      <label
        htmlFor="check"
        className="lg:hidden absolute right-[12px] mt-[2px] icons"
      >
        {isNavbarOpen ? (
          <CgClose id="close" className="text-[18px] text-black" />
        ) : (
          <BiMenu id="menu" className="text-[18px] text-black" />
        )}
      </label>
      <nav className={`navbar lg:flex lg:mt-2 md:gap-[2rem] ${isNavbarOpen ? 'open' : ''}`}>
        {navItems.filter(item => !item.hidden).map((item) => (
          <Link key={item.to} to={item.section} smooth={true} duration={2000}>
            <NavLink 
              to={item.to} 
              style={navLinkStyle(item.to)}
              onClick={() => handleNavLinkClick(item.to, item.section)}
            >
              {item.text}
            </NavLink>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;