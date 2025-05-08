"use client";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export function PasswordInput({ label }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="relative input max-w-sm">
      <input
        type={isPasswordVisible ? "text" : "password"}
        id="floating_outlined_2"
        placeholder=""
        className="block px-2.5 pb-2.5 pt-4 w-full text-gray-900 bg-transparent rounded-xl border-1 border-gray-300 appearance-none dark:border-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 peer"
      />
      <label
        htmlFor="floating_outlined_2"
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-95 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {label}
      </label>
      <button
        className="absolute inset-y-0 end-0 flex items-center z-20 px-2.5 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus-visible:text-indigo-500 hover:text-indigo-500 transition-colors"
        type="button"
        onClick={togglePasswordVisibility}
        aria-label={isPasswordVisible ? "Hide password" : "Show password"}
        aria-pressed={isPasswordVisible}
      >
        {isPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
}
