import { Button } from "./layout/Button";

const About = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-10 flex flex-col justify-center items-center">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="font-semibold text-callto-action font-poppins text-5xl mb-8">About Us</h1>
        <hr className='w-20 border-2 border-callto-action rounded-md'></hr>
      </div>

      <div className="mt-8 flex w-full flex-col items-center rounded-sm md:flex-row md:border shadow-lg">
        <div className="w-full md:w-1/2">
          <img src="/images/picture.jpg" alt="toto-image" className="w-full rounded-sm object-cover block md:hidden lg:block" />
          <img src="/images/picture1.jpg" alt="toto-image" className="w-full rounded-sm object-cover hidden md:block lg:hidden" />
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-8 py-6 space-y-4">
          <section className="text-left space-y-2">
            <h1 className="text-callto-action font-semibold font-poppins text-2xl">What We Deliver</h1>
            <h5 className="text-gray-600 text-sm xl:text-base font-lato">
              Totojan is a modern online platform designed to simplify daily transportation by offering convenient, reliable, and affordable toto booking services. Whether you are commuting to work, running errands, or exploring the city, Totojan connects you with a network of trusted toto drivers at the click of a button.
              Totojan aims to revolutionize daily commuting by providing a hassle-free, eco-friendly, and efficient transportation solution. Join us in making urban travel more convenient and sustainable!
            </h5>
          </section>
          <section>
            <Button className="px-4 py-2">Know More</Button>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About;