
import React from 'react'
import Card from './Card';
import { Link } from "react-router-dom";
import { Button } from "../components/layout/Button";
import { GoHorizontalRule } from "react-icons/go";


const exploredata = [
  {
   
    title:'Download Our App to Book a totojan',
    description:'Download the totojan online Toto booking app from the website / play store . sign up width your detalis.',
    imgurl:'/Explore/image1.jpg',

  },
  {
    
    title:' Enter pickup & Destination Location and select your ride',
    description:'put in the pick up location and the destination or just fill in yourdestination and turn on gps to fill in the pick up location.select a toto near you according to our convenience and confirm your ride . ',
    imgurl:'/Explore/image4.jpg'

  },
  {
    
    title:'Enter pickup Location & Destination Location & select your ride',
    description:' put in the pick up location and destination or just fill in your destination and turn on gps to fill in the pick up location. select a totojan near you according to your convenince and confirm your ride .',
    imgurl:'/Explore/image3.jpg',
  },
  {
   
    title:' Ready to go',
    description:"Get confiration of the driver and its details on your mobile phone. now let's totojan",
    imgurl:'/Explore/image2.jpg',
  },
]

const Explore = () => {
  return (
    <>
     <div className='mt-32 mb-16'>
         <h1 className=' font-semibold text-4xl text-center mt-16 mb-10 text-callto-action font-poppins  '>

         How to Book A totojan   ?
         </h1>

         <GoHorizontalRule className='text-5xl m-auto  text-callto-action' />
         <p className=' text-justify xl:text-center px-10 md:px-28 xl:px-36 text-2xl text-gray-700 font-lato'>
           The options for booking Totojan cob service are quite straightforward and affordable. Book totojan at the best affordable price at any time and here's how to book a Totojan cab step by step.
         </p>

      </div>
    <div className='w-full flex flex-col space-y-5 justify-center'>
     
     { exploredata.map((value ,index)=>(
      <Card
        title={value.title}
        description={value.description}
        key={index}
        imgurl={value.imgurl}
        reverse={index %2 !== 0}
        
      
      />))
      }
    </div>
    <div
        className="  text-center w-full  my-20
     flex-col sm:flex-col  h-full  relative
        "
      >
        <img
          src="/images/c8d2696d-c173-48c9-8849-17b5d187e217.jpg"
          alt=""
          className=" h-96 w-full object-center object-cover brightness-50 "
        />

        <div className="absolute inset-0 hover:duration-1000   hover:bg-gradient-to-br from-slate-900 to-transparent">
          <p className="  font-lato font-bold text-3xl my-20   text-white">
            Book Your First Toto Now
          </p>
          <Link to="" target="_blank" >
            <Button className="p-4  text-xl"> Book Now</Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Explore