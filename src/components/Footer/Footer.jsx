import React from 'react';
import { Link } from 'react-scroll';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io5';
import { CiLocationOn } from 'react-icons/ci';
import { IoCall } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';


const Footer = () => {
  return (
    <div className="bg-teal-700 w-screen mt-40 md:mt-[220px] p-4 px-[100px] grid grid-cols-1 lg:grid-cols-3 pl-20 pr-20  py-30 ">
      {/* the links */}
      <ul className="text-white text-xl">
        <Link to="home" smooth={true} duration={1000}>
          <li className="my-3 cursor-pointer">Home</li>
        </Link>
        <Link to="projects" smooth={true} duration={1000}>
          <li className="my-3 cursor-pointer">Projects</li>
        </Link>
        <Link to="about" smooth={true} duration={1000}>
          <li className="my-3 cursor-pointer">About us</li>
        </Link>
      </ul>

      {/* the links */}

      {/* contact us */}
      <div>
        <div className="mt-5">
          <a href="https://twitter.com/BirameSociety" target="blank">
            <FaTwitter className="text-white   text-2xl my-10 md:my-3 hover:text-gray-500" />
          </a>

          <FaFacebookF className="text-white   text-2xl my-10 md:my-3 hover:text-gray-500" />
          <a href="https://www.instagram.com/inyoni_zacu/" target="blank">
            <IoLogoInstagram className="text-white   text-2xl my-10 md:my-3 hover:text-gray-500" />
          </a>
          <a href="mailto:rurangwalaura8@gmail.com">
            <MdOutlineEmail className="text-white   text-2xl my-10 md:my-3 hover:text-gray-500" />
          </a>
        </div>
      </div>

      <div>
        <div className="flex gap-1 items-center my-5 md:my-3">
          <CiLocationOn className="text-white md:text-xl " />
          <span className="text-white items-center font-serif ">
            KG11 Ave, Gasabo district, Kigali, Rwanda
          </span>
        </div>
        <div className="flex gap-1 items-center my-5  md:my-3">
          <CiLocationOn className="text-white md:text-xl" />
          <span className="text-white font-serif">
            PoBox: 4376, Kigali, Rwanda
          </span>
        </div>
        <div className="flex gap-1 items-center my-5  md:my-3">
          <IoCall className="text-white md:text-xl" />
          <span className="text-white font-thin md:text-xl">+250788738461</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;