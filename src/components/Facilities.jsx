import { facilities } from "./layout/projectData";

const Facilities = () => {
  return (
    <div className="w-full px-8 py-10">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="font-semibold text-callto-action font-poppins text-4xl lg:text-5xl mb-8">Why Choose Us</h1>
        <hr className="w-20 border-2 border-callto-action rounded-md" />
      </div>

      <div className="w-full container mx-auto gap-8 lg:px-8 mt-8 text-center flex flex-col md:flex-row justify-center items-center">
        {facilities.map((facility, index) => (
          <section key={index} className="bg-slate-100 flex flex-col items-center w-[360px] md:w-1/2 p-8 shadow-lg duration-500 hover:scale-[1.02]">
            <span className="text-callto-action text-8xl">{facility.icon}</span>
            <h1 className="text-callto-action font-poppins font-semibold text-3xl mt-2">{facility.title}</h1>
            <ul className="list-disc text-left mt-2 font-lato">
              {facility.list.map((item, idx) => (
                <li key={idx}>
                  <span className="font-bold">{item.title}:</span> {item.description}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Facilities;