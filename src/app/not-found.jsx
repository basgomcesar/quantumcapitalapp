"use client";
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function Custom404() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
      const timeout = setTimeout(() => {
        router.push('/');
      }, 3000); // redirige en 3 segundos

      return () => clearTimeout(timeout);
  }, [pathname, router]);

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <img src="/logo.png" alt="Logo" className="w-20 h-23 mr-4 mb-6" />
      <h1 className="text-3xl font-semibold text-indigo-600 mb-10 text-left">
        Quantum <br />
        Capital
      </h1>
      <p className="text-center mb-6 text-gray-700">
        La página que estás buscando no existe o ha sido movida.
        <br />
        Si crees que esto es un error, por favor contacta al soporte técnico.
      </p>
      <h1>404 - Página no encontrada</h1>
      <p>Redirigiendo a la página principal...</p>
    </div>
  );
}
