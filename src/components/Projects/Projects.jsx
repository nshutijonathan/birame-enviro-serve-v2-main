import React from 'react'
import { useSelector } from 'react-redux'

const Projects = () => {
    const projects = useSelector(state=>state.project)

  return (
    <div className="flex justify-center flex-col px-4 mt-[80px] md:mt-[160px]"id="projects">
      <div>
        <h1 className="font-sora text-gray-600 font-semibold md:text-[30px] text-center">
          OUR PROJECTS
        </h1>
        <p className="font-popu text-center  text-xs md:text-md text-zinc-500  my-[20px]">
          Biodiversity within natural and human-altered landscapes in rural and
          urban <br /> areas is well conserved and derived ecosystem services
          are flourishing
        </p>
      </div>
      {/* grids */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-[100px]  md:gap-4'>
         
        {
          projects.map(project=>(
           <div>
             <div className='mt-12  h-[12rem] md:h-[18rem] w-full  '>
                <img src={project.image} alt="image not found"  className="h-full  object-cover w-full rounded-xl"/>
           
             </div>
             <div>
             <h1 className='font-popu text-slate-900  text-[14px] md:text-[20px] font-semibold mt-3'>{project.heading}</h1>
             <p className='font-popu mt-4 text-gray-400  text-xs md:text-md'>{project.description}</p> 
             
             </div>
           </div>

             
          ))
        }
            
       </div>

       {/* end of grids */}
       {/* videos explaining more */}
      <div className='flex md:w-full md:justify-center mt-[50px] md:mt-[100px]'>
      <div className='grid grid-cols-1  w-full h-[30rem] md:grid-cols-2 md:h-[18rem] lg:h-[16rem] md:w-[80%] lg:w-[60%] md:gap-12 "'>
      <div className=' my-6 md:my-0'>
      <iframe
              // width="560"
           
              className="h-full w-full object-cover"
              src="https://www.youtube.com/embed/BNlJS-F-Oio?si=HvMkF6Iy19Sj98Hp&amp;start=1673"
              title="CoEB WEEKLY SEMINAR SERIES on Developing a bird-naming protocol for the long-term conservation ."
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
      </div>
            <div>
            <iframe
              // width="560"
           
              className="h-full w-full object-cover"
       
              src="https://www.youtube.com/embed/OFKQ9DMXO_E"
              title="CoEB WEEKLY SEMINAR SERIES on Developing a bird-naming protocol for the long-term conservation ."
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            </div>

       </div>
      </div>


      
  
    </div>
  );
}




export default Projects