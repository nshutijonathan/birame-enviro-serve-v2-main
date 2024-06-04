import React from 'react';
import './styles.css';

import { Fade } from 'react-awesome-reveal';

const About = () => {
  return (
    <div id="about" className='mt-[80px] md:mt-[160px]'>
          <h1 className='font-sora text-gray-600 font-semibold md:text-[30px] text-center my-12'>ABOUT US</h1>
      <div className="relative">
        <img
          src="../ProjectsFiles/bird-rwandan1.jpeg"
          alt="image not found"
          className="md:w-full   md:object-cover md:h-[35rem] h-[20rem]"
        />

        <div className="w-full h-full bg-black top-0 left-0 z-10 absolute opacity-20"></div>
        <div className="flex w-full absolute top-0 z-10 justify-center md:px-[100px]">
          <div className="mt-1 lg:mt-12">
            <Fade direction="up">
              <div className="my-5 md:my-[20px]">
                <h1 className="text-center text-white font-semibold md:text-[40px] md:my-[20px]">
                  Our Story
                </h1>

                <p className="text-center text-white text-xs flex md:hidden mx-4">
                  We are a Rwandan NGO founded by a group of young professionals
                  from diverse backgrounds. We share a common passion for
                  reconciling environmental 
                  conservation with the amelioration of community livelihoods.
                </p>

                <p className="text-center text-white font-bold hidden md:flex">
                  We are a Rwandan NGO founded by a group of young professionals
                  from <br /> diverse backgrounds. We share a common passion for
                  reconciling environmental <br />
                  conservation with the amelioration of community livelihoods.
                </p>
              </div>
            </Fade>

            <Fade direction="up">
              <div className="my-5 md:my-[20px]">
                <h1 className="text-center text-white font-semibold md:text-[40px] md:my-[20px]">
                  OUR MISSION
                </h1>
                <p className="text-center text-white text-xs flex md:hidden">
                  Safeguard the environment while contributing to the
                  improvement of community  livelihoods for present and
                  future generations.
                </p>
                <p className="text-center text-white font-bold hidden md:flex">
                  Safeguard the environment while contributing to the
                  improvement of community <br /> livelihoods for present and
                  future generations.
                </p>
              </div>
            </Fade>

            <Fade direction="up">
              <div className="my-5 md:my-[20px]">
                <h1 className="text-center text-white font-semibold md:text-[40px] md:my-[20px]">
                  OUR VISION
                </h1>
                <p className="text-center text-white text-xs px-4 md:px-0 flex md:hidden">
                  Biodiversity within natural and human-altered landscapes in
                  rural and urban 
                  areas is well conserved and derived ecosystem services are
                  flourishing.
                </p>
                <p className="text-center text-white font-bold hidden md:flex">
                  Biodiversity within natural and human-altered landscapes in
                  rural and urban <br />
                  areas is well conserved and derived ecosystem services are
                  flourishing.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
