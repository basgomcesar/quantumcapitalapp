"use client";
import { PiWarningCircleFill } from "react-icons/pi";

export function TextAreaClaim({ label, id, register, error, defaultMessageError, placeholder = " ", ...rest }) {
  return (
    <>
      <div className="relative">
        <textarea
          id={id}
          placeholder={placeholder}
          {...register}
          {...rest}
          className={`block px-2.5 pb-2.5 pt-4 w-full text-gray-900 bg-transparent rounded-xl border border-gray-300 appearance-none dark:border-gray-400 focus:border-transparent focus:outline-none focus:ring-2 ${error ? "focus:ring-red-600" : "focus:ring-blue-600"} peer`}
        />
        <label
          htmlFor={id}
          className={`absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 ${error ? "peer-focus:text-red-600" : "peer-focus:text-blue-600"} peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-95 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
        >
          {label}
        </label>
      </div>
      {error && (
        <div className="flex items-center mt-2 text-sm text-red-600 dark:text-red-500">
          <PiWarningCircleFill className="mr-1" size={16} />
          {error?.message || defaultMessageError}
        </div>
      )}
      <style jsx>{`
        input::placeholder {
          color: transparent; /* Oculta el placeholder */
        }
      `}</style>
    </>
  );
}
