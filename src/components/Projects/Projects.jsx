import React from 'react'
import { useSelector } from 'react-redux'

const Projects = () => {
    const projects = useSelector(state=>state.project)

  return (
    <div className="flex justify-center flex-col px-4 mt-[80px] md:mt-[160px]"id="projects">
      <div>
        <h1 className="font-sora text-gray-600 font-semibold text-[1.5rem] text-center">
          OUR PROJECTS
        </h1>
        <p className="font-popu text-center  text-[1.1rem] md:text-md text-zinc-500  my-[20px]">
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
             <div className='mt-12  h-[18rem] w-full  '>
                <img src={project.image} alt="image not found"  className="h-full  object-cover w-full rounded-xl"/>
           
             </div>
             <div>
             <h1 className='font-popu text-slate-900   text-[1.5rem] font-semibold mt-3 '>{project.heading}</h1>
             <p className='font-popu mt-4 text-gray-400  text-[1.1rem] md:text-md'>{project.description}</p> 
             
             </div>
           </div>

             
          ))
        }
            
       </div>

       {/* end of grids */}
       {/* videos explaining more */}
     
      
  
    </div>
  );
}




export default Projects