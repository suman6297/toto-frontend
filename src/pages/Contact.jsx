import { Button } from "../components/layout/Button";

const Contact = () => {
  return (
    <div className="container mx-auto"><div>
    <div className="mx-auto max-w-7xl px-4">
      <div className="mx-auto max-w-7xl py-12 md:py-10">
        <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="px-2 md:px-12">
              <p className="text-3xl font-bold font-poppins text-callto-action md:text-4xl">
                Get in touch
              </p>
              <p className="mt-4 font-lato text-xl text-gray-500">
                Our friendly team would love to hear from you
              </p>
              <form action="" className="mt-8 space-y-4">
                <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-base font-bold font-lato text-callto-action"
                      htmlFor="first_name"
                    >
                      First Name
                    </label>
                    <input type="name" placeholder="First Name" className="flex h-10 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm font-lato placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"/>
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-base font-bold font-lato text-callto-action"
                      htmlFor="last_name"
                    >
                      Last Name
                    </label>
                    <input type="name" placeholder="Last Name" className="flex h-10 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm font-lato placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"/>
                  </div>
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <label
                    className="text-base font-bold font-lato text-callto-action"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input type="email" placeholder="Email Address" className="flex h-10 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm font-lato placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"/>
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <label
                    className="text-base font-bold font-lato text-callto-action"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className='font-lato border border-gray-300 p-2 w-full h-36 rounded-sm focus:outline-none'
                    id="message"
                    placeholder="Leave us a message..."
                    cols="3"
                    rows="4"
                  ></textarea>
                </div>
                <Button
                  type="button"
                  className="px-3.5 py-2.5 inline-flex w-full items-center justify-center"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          <img
            alt="Contact us"
            className="hidden max-h-full w-full rounded-lg object-cover lg:block"
            src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          />
        </div>
      </div>
    </div>
    <div className="rounded-lg bg-callto-action/20 xl:mb-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="py-20">
          <div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="w-full text-5xl font-heading text-gray-900">Our Offices</p>
              <p className="w-full font-lato text-xl text-gray-600">
                Find us at these locations.
              </p>
            </div>
            <div className="space-y-4 divide-y-4">
              <div className="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full">
                <p className="w-full text-xl font-lato  text-gray-900">
                  Branch office
                </p>
                <p className="w-full text-base  text-gray-600">Mon-Sat 9am to 5pm.</p>
                <p className=" font-lato text-gray-600">
                  100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN
                </p>
              </div>
              <div className="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full">
                <p className="w-full text-xl font-lato  text-gray-900">
                  Head office
                </p>
                <p className="w-full text-base  text-gray-600">Mon-Sat 9am to 5pm.</p>
                <p className=" font-lato text-gray-600">
                  12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Contact;