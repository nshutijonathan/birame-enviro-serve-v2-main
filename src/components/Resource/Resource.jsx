import React from "react";

const Resource = () => {
  return (
    <div className="md:mt-[15rem] h-full">
      <h1 className="font-sora text-gray-600 font-semibold text-[1.5rem] text-center">
        RESOURCES
      </h1>
      <div
        className="flex md:w-full md:justify-center mt-[50px] md:mt-[100px]"
        id="resource"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 w-full md:w-[90%] lg:w-[85%] h-[30rem] md:h-[18rem] lg:h-[25rem] md:gap-6 lg:gap-8">
          <div className="my-6 md:my-0">
            <iframe
              className="h-full w-full object-cover"
              src="https://www.youtube.com/embed/BNlJS-F-Oio?si=HvMkF6Iy19Sj98Hp&amp;start=1673"
              title="CoEB WEEKLY SEMINAR SERIES on Developing a bird-naming protocol for the long-term conservation."
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              className="h-full w-full object-cover"
              src="https://www.youtube.com/embed/OFKQ9DMXO_E"
              title="CoEB WEEKLY SEMINAR SERIES on Developing a bird-naming protocol for the long-term conservation."
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="relative">
            <a
              href="https://www.africanbirdclub.org/wp-content/uploads/2023/04/Final_Report_ABC_Rurangwa.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="Birame report"
              className="absolute inset-0 z-10"
            ></a>
            <iframe
              className="h-full w-full object-cover"
              src="https://www.africanbirdclub.org/wp-content/uploads/2023/04/Final_Report_ABC_Rurangwa.pdf"
              title="Birame report"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
