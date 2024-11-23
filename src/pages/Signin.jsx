import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, GoogleButton } from "../components/layout/Button";

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async ({ role, email, password }) => {
    try {
      const res = await axios.post ("http://localhost:5000/api/auth/login", { role, email, password });
      console.log(res);
      alert ("Logged in Successfully!");
      navigate("/");
    } catch(error) {
      alert ("Log in unsuccessful!")
      console.error("There was an error!", error);
    }
  }

  return (
    <>
      <div className="container mx-auto w-full">
        <div className="w-full py-8">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            <img
              alt="login"
              className="hidden lg:block max-h-full w-full rounded-sm object-cover pl-10 xl:pl-24"
              src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=800&q=80"
            />
            {/* login from */}
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
                <p className="font-semibold font-poppins text-callto-action text-2xl md:text-4xl text-center lg:text-left">Log in</p>
                <p className="mt-2 font-lato text-sm sm:text-base text-gray-500">
                  Please enter your email address and password to log in
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="text-base font-bold font-lato text-callto-action">
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
                      <label htmlFor="email" className="text-base font-bold font-lato text-callto-action">
                        Email Address
                      </label>
                      <div className="mt-2">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          id="email"
                          className="flex h-10 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm font-lato placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                          {...register("email", { required: "Please enter your valid email address!" })}
                        />
                        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="password" className="text-base font-bold font-lato text-callto-action">
                          Password
                        </label>
                        <Link
                          to="#"
                          className="text-sm font-semibold font-lato text-gray-700 hover:underline"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <div className="mt-2">
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          id="password"
                          className="flex h-10 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm font-lato placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                          {...register("password", { required: "Please enter correct password!" })}
                        />
                        {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                      </div>
                    </div>
                    <div>
                      <Button
                        type="submit"
                        className="px-3.5 py-2.5 inline-flex w-full items-center justify-center"
                      >
                        Log in
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
                    Log in with Google
                  </GoogleButton>
                </div>
                <p className="mt-5 text-base font-lato text-gray-600">
                  New user in totojan?{' '}
                  <Link
                    to="/signup"
                    className="font-semibold text-gray-700 transition-all duration-500 hover:text-callto-action pl-1"
                  >
                    Click here to Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;