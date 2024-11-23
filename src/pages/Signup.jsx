import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, GoogleButton } from "../components/layout/Button";

const Signup = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  function name(params) {
    
  }
  let a =10
   a=15
  console.log(a);
  
  // let
  // const

  const onSubmit = async ({ role, name, email, password }) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", { role, name, email, password });
      console.log(res);
      alert ("Registered Successfully!");
      navigate("/login");
    } catch(error) {
      alert ("Registration unsuccessful!")
      console.error("There was an error registering!", error);
    }
  }

  return (
    <>
      <div className="container mx-auto w-full">
        <div className="w-full py-8">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            <img
             className="mx-auto hidden lg:block h-full w-full rounded-sm object-cover pl-10 xl:pl-24"
             src="https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5ld3NsZXR0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
             alt="signup"
            />
            {/* signup from */}
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
                <p className="font-semibold font-poppins text-callto-action text-2xl md:text-4xl text-center lg:text-left">Sign up</p>
                <p className="mt-2 font-lato text-sm sm:text-base text-gray-500">
                  Already have an account in totojan?{' '}
                  <Link
                    to="/login"
                    className="font-semibold text-gray-700 transition-all duration-500 hover:text-callto-action pl-1"
                  >
                    Click here to Log in 
                  </Link>
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="role" className="text-base font-bold font-lato text-callto-action">
                        Choose User / Driver
                      </label>
                      <div className="mt-2">
                        <select
                          id="role"
                          name="role"
                          className='flex h-10 w-full rounded-sm border border-gray-300 bg-transparent p-2 text-sm font-lato focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
                          {...register("role", { required: "Please choose User/ Driver!" })}
                        >
                          <option>User</option>
                          <option>Driver</option>
                        </select>
                        {errors.role && <p className="text-red-600">{errors.role.message}</p>}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="name" className="text-base font-bold font-lato text-callto-action">
                        Full Name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          id="name"
                          className="flex h-10 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm font-lato placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                          {...register("name", { required: 'Please enter your full name!', maxLength: 255 })}
                        />
                        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="text-base font-bold font-lato text-callto-action">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          id="email"
                          className="flex h-10 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm font-lato placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                          {...register("email", { required: "Please enter your valid email!" })}
                        />
                        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="password" className="text-base font-bold font-lato text-callto-action">
                          Create Password <span className="text-base font-medium font-lato text-gray-500 pl-1">(min 8 characters)</span>
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          id="password"
                          className="flex h-10 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm font-lato placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                          {...register("password", { required: "Password length should be minimum 8!", minLength: 8 })}
                        />
                        {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                      </div>
                    </div>
                    <div>
                      <Button
                        type="submit"
                        className="px-3.5 py-2.5 inline-flex w-full items-center justify-center"
                      >
                        Create Account
                      </Button>
                    </div>
                  </div>
                </form>
                <div className="flex items-center justify-center mt-2">
                  <hr className="flex-grow mx-2 border-gray-200" />
                  <span className="text-base text-gray-700 font-medium font-lato">or</span>
                  <hr className="flex-grow mx-2 border-gray-200" />
                </div>
                <div className="mt-2">
                  <GoogleButton
                    type="button"
                  >
                    <span className="mr-2 inline-block">
                      <img src="/logo/search.png" alt="google-icon" className="w-5" />
                    </span>
                    Sign up with Google
                  </GoogleButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup;