import { NavLink } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";

export default function Login() {
  return (
    <>
    <div className='h-screen flex justify-between'>
     <div className='w-5/12 bg-inherit'>
     <img src="src/assets/login_cover.png" alt="image-cover" className='bg-cover'/>
     </div>
     
     <div className='flex flex-col items-center w-7/12'>
     <div className='flex justify-end w-11/12 p-8 mb-8'>
     < RxCross2 size={30}/>
      </div>
     <div className='w-1/2'>
     <h2 className="text-4xl font-bold mb-2">Welcome Back</h2>
      <p className="mb-8">Please enter your details below to Login</p>
      <button className="transition ease-in-out duration-300 delay-150 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700">Login using OTP</button>
      <div className="my-6 flex items-center">
        <div className="flex-grow border-t"></div>
        <span className="mx-4">OR</span>
        <div className="flex-grow border-t"></div>
      </div>
      <div className="space-y-4">
      
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input id="username" type="text" placeholder="Please enter the username" className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring " />
        </div>
      
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input id="password" type="password" placeholder="**************" className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring" />
        </div>
      </div>
     
      <div className="mt-4 flex justify-end">
        <a href="#" className="text-sm text-black hover:underline hover:text-indigo-600">Forgot password?</a>
      </div>
  
      {/* <button className="transition ease-in-out duration-300 delay-150 w-full mt-6 flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-black hover:bg-gray-700">Login</button> */}

      <NavLink to='/' className="transition ease-in-out duration-300 delay-150 w-full mt-6 flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700">Login</NavLink> 

      <div className="mt-4 text-center">
        <span>Don’t have an account? </span> 
        <a href="#" className="text-black font-semibold hover:underline hover:text-indigo-600">Create an Account</a>
      </div>  
      </div>
     </div>

    </div>
    </>
   
  )
}
