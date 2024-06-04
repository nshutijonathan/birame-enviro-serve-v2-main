import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const WhatWeDo = () => {
  const [hoverId, sethoverId] = useState(null);
  const [model, setModel] = useState(false);
  const [readMore, setReadMore] = useState(null);
  const [heading, setHeading] = useState(null);
  const [paragraph, setParagraph] = useState(null);
  const [description, setDescription] = useState(null);
  const why = useSelector((state) => state.what);

  const handleData = (id) => {
    const filteredData = why.filter((does) => does.id === id);
    if (filteredData.length > 0) {
      setHeading(filteredData[0].heading);
      setParagraph(filteredData[0].paragraph);
      setDescription(filteredData[0].description);
    }
    console.log('We could not find that id');
  };

  return (
    <div className="relative mt-[5rem] md:mt-[160px]" id="what">
      <h1 className='font-sora text-gray-600 font-semibold md:text-[30px] text-center my-12'>WHAT WE DO</h1>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 md:px-[100px] md:gap-4">
        {why.map((singleWhat) => (
          <div
            className="relative my-[20px] md:my-0"
            key={singleWhat.id}
            onMouseEnter={() => sethoverId(singleWhat.id)}
            onMouseLeave={() => sethoverId(null)}
          >
            <img
              src={singleWhat.image}
              alt="image not found"
              className=" h-[15rem] md:h-[17rem] w-full"
            />
            {hoverId === singleWhat.id && (
              <div className="bg-[rgba(0,0,0,0.45)] absolute top-0 left-0 w-full h-full z-10 text-white flex justify-center items-center">
                <div>
                  <button
                    className="border border-white p-2 rounded-md "
                    onClick={() => {
                      setReadMore(singleWhat.id);
                      handleData(singleWhat.id);
                      setModel(!model)
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {model && (
        <div className="bg-[rgba(0,0,0,0.6)] w-full flex justify-center items-center  h-screen md:h-full fixed top-0 left-0 z-10">
          <div className=" md:p-[30px] p-[15px] mx-[20px] w-full md:w-1/2 bg-white">
            <div className="flex justify-between">
              <div className="md:my-[12px]">
                <h1 className="text-slate-900 font-semibold text-[20px] md:font-semibold mt-[5px]">
                  {heading}
                </h1>
                <p className="text-md">{paragraph}</p>
              </div>

              <div className="flex justify-end text-gray-400 font-semibold hover:text-green-400 cursor-pointer h-full  items-center md:mt-4"onClick={()=>setModel(!model)}>
                Hide
              </div>
              {/* description */}
            </div>

            <div>
              <p className="text-gray-400 font-semibold text-[10px] my-[6px] md:text-[13px] md:my-[12px]">
                {description}
              </p>
            </div>

            <div>
              <h1>Forests , Animals</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatWeDo;
