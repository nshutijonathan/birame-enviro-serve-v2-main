import React from 'react';
import { Slide, Bounce } from 'react-awesome-reveal';
import { useSelector } from 'react-redux';
import { useState } from 'react';
const Team = () => {
  const team = useSelector((state) => state.team);

  //   handle hoverId

  const [hoverId, sethoverId] = useState(); 
  const [model , setModel] = useState(false)
  const [name , setName] = useState(null)
  const [descript , setDescript] = useState(null)

  const handleDetails = (id)=>{
      const dataa = team.filter(teamu=>teamu.id === id)
      setName(dataa[0].name)
      setDescript(dataa[0].details)
  }

  return (
    <div className="flex flex-col justify-center w-full  md:mt-[160px]" id="team"> 
     <h1 className='font-sora text-gray-600 font-semibold md:text-[30px] text-center my-12'>TEAM</h1>
      <div className=":w-full relative  ">
        <div className=" w-full  md:px-[100px] lg:px-[90px] flex justify-center mt-6">
          <div className="grid  md:grid-cols-2  my-4 md:my-0  lg:grid-cols-3 md:gap-8">
            {team.map((member, index) => (
              <Bounce key={index}>
                {' '}
                <div
                  className="w-screen h-[18rem] md:w-[19rem] lg:w-[15rem] md:h-[19rem]  lg:h-[15rem] relative"
                  onMouseEnter={() => sethoverId(member.id)}
                  onMouseLeave={() => sethoverId(null)}
                >
                  <img
                    src={member.image}
                    alt={`${member.name} image not found`}
                    className=" h-full w-full object-cover my-4 md:my-0"
                  />

                  {hoverId === member.id && (
                    <div className="absolute top-0 left-0 flex  w-full h-full bg-[rgba(0,0,0,0.6)]">
                      <div className="flex h-full items-end w-full px-3  pb-[20px] justify-between">
                        <div className="text-white">
                          <p className="text-sm">{member.name}</p>
                          <p className="text-sm">{member.title}</p>
                        </div>
                        <div className="">
                          <button className="border border-cyan-400 bg-transparent px-2 ml-3 py-1 rounded-md text-white" onClick={()=>{
                            handleDetails(member.id)
                            setModel(!model)
                          }}>
                            Details
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Bounce>
            ))}
          </div>
        </div> 

       {
        model &&  <div className='w-full h-screen md:h-full fixed top-0 left-0 z-20 flex justify-center bg-[rgba(0,0,0,0.6)] items-center px-4 md:px-0 md '>
          <div className='bg-white md:w-1/2 flex justify-between p-6'>
            <div>
              <h1 className='text-slate-900 md:text-[20px] font-semibold md:mt-[5px]'>{name}</h1>
              <p className=' text-xs md:text-sm mt-6 text-gray-500'>{descript}</p>
            </div>
            <div className='flex justify-end text-gray-400 font-semibold hover:text-green-400 cursor-pointer h-full  items-center' onClick={()=>setModel(!model)}>Hide</div>
          </div>
        </div>
       }
      </div>
    </div>
  );
};

export default Team;
