"use client"
import Image from "next/image"
// import Logo from "../assets/logo.png";
import Link from "next/link";
import Logo from "../logo";

export default function SignUp()  {
  return (
    <div className='flex justify-center items-start pt-5 bg-yellow-500 ' style={{minHeight: '100vh'}} >
    <div className="mt-5 flex min-h-full flex-col bg-gray-900 justify-center md:w-[40vh]  px-6 py-12 lg:px-8 rounded-md ring ring-yellow-400">
    <div className="flex justify-center" >
        <Logo/>
      </div>
    <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm ">
      <form className="space-y-6 p-5" action="#" method="POST">
      
      <div>
          <label className="block text-sm font-medium leading-6 text-white-900">Username</label>
          <div className="mt-2">
            <input id="userName" name="userName" type="text" autoComplete="userName" required 
            className="form-input block w-full rounded-md border-0 p-5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
            focus:ring-indigo-600
            sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-white-900">Birthday</label>
          
          <div className="mt-2">
            <input id="birthday"
             name="birthday" 
             type="date"
             autoComplete="birthday"
             required 
             className="form-input block w-full rounded-md border-0 p-5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
             focus:ring-indigo-600
             sm:text-sm sm:leading-6"/>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium leading-6 text-white-900">Email</label>
          <div className="mt-2">
            <input id="email" name="email" type="email" autoComplete="email" required 
            className="form-input block w-full rounded-md border-0 p-5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
            focus:ring-indigo-600
            sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium leading-6 text-white-900">Password</label>
          </div>
          <div className="mt-2">
            <input id="password" name="password" type="password" autoComplete="current-password" required 
            className="form-input block w-full rounded-md border-0 p-5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium leading-6 text-white-900">Confirm Password</label>
          </div>
          <div className="mt-2">
            <input id="confirmPassword" name="confirmPassword" type="password" autoComplete="confirmPassword" required 
            className="form-input block w-full rounded-md border-0 p-5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>


        <div>
          <button type="submit" 
                    className="flex w-full justify-center rounded-md  p-5 text-sm font-semibold uppercase leading-6 text-gray-800 font-bold shadow-sm  bg-yellow-400 hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                    
          {/* </button> */}
        </div>
      </form>

      <p className="mt-5 text-center text-md text-white-500">
        Have an account?
        <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 underline" style={{color: '#EFD370'}} >Sign In</Link>
      </p>
    </div>
  </div>
</div>
  )
}
