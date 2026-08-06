"use client";

import React, { useState } from "react";
import Email from "./Email";
import Code from "./Code";
import Password from "./Password";
import Link from "next/link";
const ResetPassword = () => {
  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
  const [codigoVerificado, setCodigoVerificado] = useState(null);
  const [serverError, setServerError] = useState("");

  return (
    <div className="min-h-screen w-full bg-[var(--primary)] flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-10 text-white font-semibold">
        ¿Olvidaste tu contraseña?
      </h1>

      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center justify-center">
          <img src="/logo.png" alt="Logo" className="w-20 h-23 mr-4 mb-6" />
          <h1 className="text-3xl font-semibold text-indigo-600 mb-10 text-left">
            Quantum <br />
            Capital
          </h1>
        </div>

        {step === "email" && (
          <Email
            email={email}
            setEmail={setEmail}
            setStep={setStep}
            setServerError={setServerError}
          />
        )}

        {step === "code" && (
          <Code
            email={email}
            setStep={setStep}
            setServerError={setServerError}
            setCodigoVerificado={setCodigoVerificado}
          />
        )}

        {step === "password" && (
          <Password
            email={email}
            codigo={codigoVerificado}
            setServerError={setServerError}
          />
        )}

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/login" className="text-indigo-600 hover:text-indigo-500">
              Iniciar sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
