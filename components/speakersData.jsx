import React from 'react'
import Image from 'next/image';

const SpeakersData = ({ speaker, name, organisation }) => {
  return (
    <div>
      <div className="h-[200px] lg:h-[350px]">
        <div className="rounded-[2%] block mx-auto my-0 hover:bg-purple-500/50 ease-in duration-300 w-[100px] h-[100px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] mt-100px -rotate-12 origin-center ">
          <div className="rounded-[3%] hover:bg-purple-600/50 ease-in duration-300 origin-center rotate-6 w-[150px] h-[150px]  md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]">
            <div className="rounded-[5%] bg-purple-600 hover:bg-purple-600 ease-in duration-300 origin-center rotate-6 w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] border-purple-600 border-b-[10px] shadow-lg shadow-purple-500">
              <Image
                src={speaker}
                alt="speaker"
                height="250px"
                width="250px"
                className="max-w-[100%] rounded-[5%] "
              />
            </div>
          </div>
          <div className="rotate-12 bg-transparent flex flex-col items-center justify-center my-2 lg:mt-4 lg:pr-[100px] pr-[40px] ">
            <p className="text-sm lg:text-xl bg-transparent text-purple-900 font-bold">
              {name}
            </p>
            <p className="text-sm lg:text-xl bg-transparent text-purple-800">{organisation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakersData
