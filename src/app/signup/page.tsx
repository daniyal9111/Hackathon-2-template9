import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Image from "next/image";

export default function Signup() {
  return (

    
    <main className="bg-white">
      <div className="w-full  h-[250px] bg-black" >
            <div className="relative ">
              <Image
                      src="/menu1.jpeg"
                      alt="Post"
                      width={1024} height={550}
                      className=" w-full h-full bg-yellow-500" 
                    />
                    <h1 className="text-4xl font-bold text-white absolute top-[50%] left-[48%]  transform translate-y-[-50%] ">Sign up page</h1>
                    <h3 className="  text-white absolute top-[65%] left-[52%]  transform translate-y-[-50%] ">Home :  <span className="text-yellow-500">Sign up</span> </h3>
      
              
            </div>
            </div>

      <div className=" flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Sign Up
        </h1>

        {/* Form */}
        <form className="space-y-4">
          {/* Name */}
          <div className="flex items-center border border-gray-300 rounded-lg p-2">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Name"
              className="w-full outline-none text-gray-700"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border border-gray-300 rounded-lg p-2">
            <FaEnvelope className="text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none text-gray-700"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border border-gray-300 rounded-lg p-2">
            <FaLock className="text-gray-500 mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none text-gray-700"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="remember"
              className="form-checkbox text-orange-500"
            />
            <label htmlFor="remember" className="text-gray-600 text-sm">
              Remember me?
            </label>
          </div>

          {/* Sign Up Button */}
          <button className="bg-orange-500 text-white w-full py-2 rounded-lg font-semibold">
            Sign Up
          </button>
        </form>

        {/* Forgot Password */}
        <p className="text-center text-sm text-gray-500 mt-4">
          <a href="#" className="text-orange-500">
            Forget password?
          </a>
        </p>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="text-gray-400 px-2 text-sm">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Social Buttons */}
        <div className="space-y-2">
          <button className="flex items-center justify-center border border-gray-300 rounded-lg w-full py-2">
            <FcGoogle className="text-xl mr-2" />
            <span className="text-sm text-gray-600">Sign up with Google</span>
          </button>
          <button className="flex items-center justify-center border border-gray-300 rounded-lg w-full py-2">
            <FaApple className="text-xl mr-2 text-black" />
            <span className="text-sm text-gray-600">Sign up with Apple</span>
          </button>
        </div>
      </div>

      </div>
    </main>
  );
}
