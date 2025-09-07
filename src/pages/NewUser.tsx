import React, { useState } from "react";
import Header from "../components/Header";
import { Eye, EyeOff } from "lucide-react";

const NewUser = () => {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const createUser = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
    } else {
      setError("");
      console.log("Passwords match, submit form");
    }    
  };

  return (
    <>
      <Header />
      <div className="flex h-screen items-start justify-center bg-black mt-0">
        <div className="w-2/5 h-auto rounded-xl bg-gray-background-dark p-6 shadow-md mt-10">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Create Account</h2>
          <form className="mt-4 h-auto" onSubmit={createUser}>
            <div className="mb-4" >
              <label className="block text-white">Username</label>
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 p-2 placeholder-gray-400 text-white"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4" >
              <label className="block text-white">Email</label>
              <input
                type="email"
                className="w-full rounded-md border border-gray-300 p-2 placeholder-gray-400 text-white"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-white">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2 placeholder-gray-400 text-white"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-white">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2 placeholder-gray-400 text-white"
                placeholder="Re-Enter your password"
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              className="w-full rounded-md bg-primary p-2 text-white mt-4 cursor-pointer mb-5">Create Account</button>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default NewUser;