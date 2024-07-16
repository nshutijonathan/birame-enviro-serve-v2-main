import React from 'react';
import DonateForm from './DonateForm';

const Donate = () => {
  return (
    <div className=" md:mt-[160px] relative z-20" id="donate">
      <div>
        <img
          src="../donateImage.svg"
          alt="image not found "
          className="w-full "
        />
      </div>
      <div className="absolute top-0 md:px-[8rem] mt-6 left-0 w-full h-full items-center grid grid-cols-2 ">
        <div>
          {' '}
          <h1 className="text-white md:text-[6rem] font-sora">Donate</h1>
          <p className="text-white md:text-[2.5rem] font-popu">for a better environment</p>
          <p className=" md:text-[1.25rem] font-popu" style={{color:"rgba(166, 166, 166, 1)"}}>
            Your donation helps us safeguard the environment and improve
            community livelihoods. Together, we can create a sustainable future
            for Rwanda.
          </p>
        
        </div>

        <DonateForm/>
       
      </div>

    </div>
  );
};

export default Donate;
