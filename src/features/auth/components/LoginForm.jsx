"use client";
import Link from "next/link";
import { PasswordInput } from "@/components/shared/forms/PasswordInput";
import { TextInput } from "@/components/shared/forms/TextInput";
import { FaSpinner } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useLogin } from "@/features/auth/hooks/useLogin";
import { Button } from "@/components/ui/button";
import { MOCK_USER } from "@/features/auth/mocks/mock-auth";


export function LoginForm() {
  const { login, loading, error, resetError } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: process.env.NEXT_PUBLIC_ENABLE_MOCK_LOGIN === "true"
      ? { email: MOCK_USER.email, password: MOCK_USER.password }
      : undefined,
  });

  const onSubmit = async (data) => {
    resetError();
    try {
      const { email, password } = data;
      await login(email, password);
    } catch (error) {

    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="Correo electronico"
        id="email"
        defaultMessageError="Correo invalido"
        register={register("email", {
          required: "Ingrese un correo.",
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "Formato de correo inválido.",
          },
        })}
        error={errors.email}
      />
      <PasswordInput
        label="Contraseña"
        register={register("password", {
          required: "Ingrese una contraseña.",
        })}
        error={errors.password}
      />
            {error && !errors.password && (
        <div className="text-red-600 text-sm mt-1">{error}</div>
      )}

      <div className="flex items-start justify-between">
        <div className="text-sm">
          <Link
            href="/reset-password"
            className="text-indigo-600 hover:text-indigo-500"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
      </div>
      <Button
        type="submit"
        disabled={isSubmitting || loading}
        className="w-full rounded-3xl py-6"
      >
        {isSubmitting || loading ? (
          <FaSpinner className="animate-spin" size={20} color="white" />
        ) : (
          "Iniciar sesión"
        )}
      </Button>
      {process.env.NEXT_PUBLIC_ENABLE_MOCK_LOGIN === "true" && (
        <p className="text-center text-xs text-muted-foreground">
          Acceso demo: {MOCK_USER.email} / {MOCK_USER.password}
        </p>
      )}
    </form>
  );
}
