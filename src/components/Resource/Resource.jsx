import React from 'react'

const Resource = () => {
  return (
    <div className='md:mt-[15rem] h-full'>
        <h1 className=' font-sora text-gray-600 font-semibold text-[1.5rem] text-center'>RESOURCES</h1>
        <div className='flex md:w-full md:justify-center mt-[50px] md:mt-[100px]' id="resource">
    <div className='grid grid-cols-1  w-full h-[30rem] md:grid-cols-2 md:h-[18rem] lg:h-[25rem] md:w-[80%] lg:w-[60%] md:gap-12 "'>
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

  )
}

export default Resource