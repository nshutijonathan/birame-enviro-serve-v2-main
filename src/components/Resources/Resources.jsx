import React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';
import { Bounce } from 'react-awesome-reveal';
const Resources = () => {
  const resources = useSelector((state) => state.resource);
  return (
    <div className="bg-zinc-50 mt-[60px] md:mt-[160px]" id="resources"> 
       <div className='flex justify-center font-sora  font-semibold  text-gray-600 text-[30px] '>
       <h1 className='font-sora text-gray-600 font-semibold text-[15px] md:text-[30px] text-center md:my-12'>RESOURCES</h1>
       </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-[100px] my-[5px] md:my-4 md:gap-4">
        {resources.map((resources, index) => (
          <Bounce duration={2000}>
            <div
              className={`${
                index === 1
                  ? 'bg-cyan-500 md:h-full lg:h-[22rem] w-full p-[17px] my-[50px] md:my-0 md:p-[32px] cursor-pointer text-white '
                  : 'md:h-full lg:h-[22rem] w-full bg-white p-[17px] md:p-[32px] my-[20px] md:my-0 cursor-pointer '
              }`}
              id="card"
              key={index}
            >
              <div className="content">
                <div className="icon text-gray-500 "><img src={resources.image} alt=""  className='md:w-[30px] md:h-[30px]'/></div>
                <h1
                  className={`${
                    index === 1
                      ? 'font-sans text-white lg:text-[20px] font-semibold my-[20px]'
                      : 'font-sans text-slate-800 lg:text-[20px] font-semibold  my-[20px]'
                      
                  }`}
                >
                  {resources.heading}
                </h1>
                <p
                  className={`${
                    index === 1
                      ? 'text-white font-semibold text-xs md:text-sm'
                      : 'text-gray-400 font-semibold text-xs md:text-sm'
                  }`}
                >
                  {resources.description}
                </p>
              </div>
            </div>
          </Bounce>
        ))}
      </div>
    </div>
  );
};

export default Resources;
