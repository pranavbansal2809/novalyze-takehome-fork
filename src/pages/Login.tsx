import React from "react";
import Header from "../components/Header";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const handleSSOLogin = (method: string) => {
  };

  const handleLogin = () => {
  };

  return (
    <>
    <Header />
    <div className="flex h-screen items-start justify-center bg-black">
      <div className="w-2/5 rounded-xl bg-gray-background-dark p-6 shadow-md mt-10">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Login</h2>
        <form className="mt-4">
          <div className="mb-4" >
            <label className="block text-white">Email</label>
            <input
              type="email"
              className="w-full rounded-md border border-gray-300 p-2 placeholder-gray-400 text-white"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-8">
            <label className="block text-white">Password</label>
            <input
              type="password"
              className="w-full rounded-md border border-gray-300 p-2 placeholder-gray-400 text-white"
              placeholder="Enter your password"
            />
          </div>
          <div className="space-y-4 mt-4">
            <div className="flex gap-10">
            <button onClick={() => handleSSOLogin("google")} 
              className="flex items-center justify-center w-1/3 rounded-md bg-primary p-2 text-white shadow-sm cursor-pointer"
              ><FaGoogle className="mr-2 text-red-500" />Google</button>
            <button onClick={() => handleSSOLogin("facebook")}
              className="flex items-center justify-center w-1/3 rounded-md bg-primary p-2 text-white shadow-sm cursor-pointer"
              ><FaFacebook className="mr-2 text-blue-500" />Facebook</button>
            <button onClick={() => handleSSOLogin("github")}
                className="flex items-center justify-center w-1/3 rounded-md bg-primary p-2 text-white shadow-sm cursor-pointer"
              ><FaGithub className="mr-2 text-black-500" />Github</button>
            </div>
          </div>
          <button onClick={() => handleLogin()}
          className="w-full rounded-md bg-primary p-2 text-white mt-4 cursor-pointer">Login</button>
          <div className="flex justify-between mt-4">
          <label className="text-white underline cursor-pointer">Forgot Password?</label>
          <Link className="text-white underline cursor-pointer ml-1" to="/newuser">Create Account</Link>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
