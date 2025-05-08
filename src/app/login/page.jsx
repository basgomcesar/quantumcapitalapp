"use client";
import { LoginForm } from "./../../components/Loginform";
import { HeroSection } from "./../../components/HeroSection";

export default function LoginPage() {
  return (
    <div className="flex h-screen">
      <HeroSection />

      <div className="flex flex-col container h-screen pt-15 lg:px-8">
        <div className="bg-white rounded-t-3xl shadow-2xl ring-1 ring-gray-900/5 sm:max-w-full sm:mx-25 p-10 h-full">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="flex items-center justify-center mb-10">
              <img src="/logo.png" alt="Logo" className="w-20 h-23 mr-4 mb-6" />
              <h1 className="text-3xl font-semibold text-indigo-600 mb-10 text-left">
                Quantum <br />
                Capital
              </h1>
            </div>
            <h1 className="text-2xl">Te damos la bienvenida</h1>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
