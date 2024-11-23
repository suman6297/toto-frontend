import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from '../components/layout/Button';

const DeleteAcc = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async ({ role, first_name, last_name, email, reason }) => {
    try {
      const res = await axios.post("http://localhost:5000/api/authdelete/generatedeleterequest", { role, first_name, last_name, email, reason });
      console.log(res);
      alert ("Delete Request Created Successfully!");
      navigate("/login");
    } catch(error) {
      alert ("Request unsuccessful!")
      console.error("There was an error!", error);
    }
  }

  return (
    <div className="container mx-auto flex flex-col lg:flex-row justify-around py-8 px-4 lg:px-8">
      <div className="flex flex-col items-center lg:items-start lg:w-1/2 px-2 md:px-20 lg:px-8 xl:px-12">
        <h1 className='text-callto-action text-2xl md:text-4xl font-poppins font-semibold text-center lg:text-left pb-4'>
          Delete Account
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className='py-2 w-full'>
            <label htmlFor="role" className="text-base font-bold font-lato text-callto-action">
              Choose User / Driver
            </label>
            <select
              id="role"
              name="role"
              className="w-full h-10 border border-gray-300 p-2 bg-transparent text-sm font-lato my-1 rounded-sm cursor-pointer focus:outline-none"
              {...register("role", { required: true })}
            >
              <option>User</option>
              <option>Driver</option>
            </select>
            {errors.role && <p className="text-red-600">Please choose User/ Driver!</p>}
          </div>
          <div className="py-2 gap-4 flex flex-col lg:flex-row w-full">
            <div className="space-y-2 w-full">
              <label htmlFor="first_name" className="text-base font-bold font-lato text-callto-action">
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                id="first-name"
                className="flex h-10 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm font-lato placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                {...register("first_name", { required: 'Please enter your first name!', maxLength: 255 })}
              />
              {errors.first_name && <p className="text-red-600">{errors.first_name.message}</p>}
            </div>
            <div className="space-y-2 w-full">
              <label htmlFor="last_name" className="text-base font-bold font-lato text-callto-action">
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                id="last-name"
                className="flex h-10 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm font-lato placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                {...register("last_name", { required: 'Please enter your last name!', maxLength: 255 })}
              />
              {errors.last_name && <p className="text-red-600">{errors.last_name.message}</p>}
            </div>
          </div>
          <div className='py-2 space-y-2 w-full'>
            <label htmlFor="email" className="text-base font-bold font-lato text-callto-action">
              Email Address
            </label>
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
          <div className='py-2 space-y-2 w-full'>
            
            <label htmlFor="reason" className="text-base font-bold font-lato text-callto-action">
              Reason to delete your account
            </label>
            <textarea
              type="text"
              name="reason"
              placeholder='Type your reason here...'
              id="reason"
              className='font-lato border border-gray-300 p-2 w-full h-36 rounded-sm focus:outline-none'
              {...register("reason", { required: "Please enter your reason!" })}
            />
            {errors.reason && <p className="text-red-600">{errors.reason.message}</p>}
          </div>
          <div className='w-full'>
            <Button type='submit' className="px-3.5 py-2.5 inline-flex w-full items-center justify-center">
              Delete Account
            </Button>
          </div>
        </form>
      </div>

      <div className="flex justify-center items-center lg:justify-end lg:w-1/2 pr-10">
        <img className='rounded-sm hidden lg:block' src="/images/picture.jpg" alt="Delete Account Illustration" />
      </div>
    </div>
  );
}

export default DeleteAcc;