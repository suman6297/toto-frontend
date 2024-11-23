import Accordion from "./Accordion";
import { faqItems } from './layout/projectData';

const Faq = () => {
  return (
    <div className="w-full container mx-auto flex flex-col justify-center items-center py-10">
      <div className="px-4 md:px-8 lg:px-16">
        <div className="w-full flex flex-col justify-center items-center text-center">
          <h1 className="font-semibold font-poppins text-callto-action text-4xl lg:text-5xl mb-8">Frequently Asked Questions</h1>
          <hr className='w-20 border-2 border-callto-action rounded-md'></hr>
        </div>
        <div className="w-full flex justify-center mt-8">
          <div className="p-6 w-full border-2 shadow-lg rounded-sm">
            {faqItems.map((item, index) => (
              <Accordion
                key={index}
                title={item.question}
                answer={item.answer}/>
              ))}
          </div>
        </div>
      </div>
      <p className="mt-6 px-6 md:px-20 text-center text-xs md:text-sm font-lato text-gray-500">(Please call  1800-123-4567 for more support. Our customer service team is available 24*7 to help with any queries or issues.)</p>
    </div>
  );
};

export default Faq;