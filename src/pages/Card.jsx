import React from "react";



const Card = ({title,description,imgurl , reverse}) => {
  return (
    <div>

      

      
      
          <div
            
            className={`flex   my-12
          flex-col sm:mx-16 gap-8 mx-8 sm:flex-col xl:mx-80 md:mx-32  md:flex-col xl:flex-row lg:text-xl${reverse ? '  xl:flex-row-reverse animate-wiggle2 ' :' '} ${reverse ? '  ' :'animate-wiggle '}`}
          >
            <div className="xl:mx-8">
              <h1 className={`  text-center  my-12 xl:my-8 text-3xl text-callto-action  font-semibold   xl:text-left lg:text-4xl font-poppins ${reverse ? 'xl:text-right' :' '} `}>
                {title}
              </h1>

              <p className="text-justify text-gray-600 font-lato text-xl">
                {description}
              </p>
            </div>

            {
              <img
                src={imgurl}
                alt=""
                srcset=""
                className="w-full h-full lg:h-96 lg:w-96"
              />
            }
          </div>
        
    

   
    </div>
  );
};

export default Card;
