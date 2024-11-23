import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { impactItems } from './layout/projectData';

const OurImpact = () => {
  const [counterState, setCounterState] = useState(false)
  return (
    <div className="w-full bg-callto-action/20"> 
      <div className="container mx-auto w-full flex flex-col justify-center items-center p-8">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="font-semibold font-poppins text-callto-action text-4xl lg:text-5xl mb-8">Our Impacts</h1>
          <hr className='w-20 border-2 border-callto-action rounded-md'></hr>
        </div>
        <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
          <div className="mt-16 mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 justify-center text-center">
            {impactItems.map((item, index) => (
            <div key={index} className="h-56 w-56 p-4 rounded-full shadow-lg bg-white flex flex-col justify-center">
              <div className="mx-auto w-20 h-20 -mt-16 flex items-center justify-center rounded-full border-4 border-callto-action bg-white text-callto-action text-5xl">
                {item.icon}
              </div>
              <h3 className="mt-2 text-3xl font-poppins font-semibold text-callto-action">
                { counterState &&
                  <CountUp start={0} end={item.end} duration={2.75}></CountUp>
                }
                {item.suffix}
              </h3>
              <h1 className='text-2xl text-callto-action font-poppins font-semibold'>{item.title}</h1>
              <p className="mt-2 mx-4 text-gray-700 font-lato text-base">
                {item.Description}
              </p>
            </div>
            ))}
          </div>
        </ScrollTrigger>
      </div>
    </div>
  )
}

export default OurImpact;