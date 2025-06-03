"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import withAuth from "@/utils/withAuth";
import Cookies from "js-cookie";
import ReportSection from "@/components/ReportSection";

const TopBar = () => {
  // Get user from cookies
  const cookieStore = Cookies.get();
  const user = cookieStore.user || "Invitado";

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-3 bg-white shadow z-50">
      <div className="flex items-center">
        <img src="/logo.png" alt="Quantum Capital Logo" className="h-8 w-8 mr-2" />
        <span className="font-semibold text-xl text-gray-800">Quantum Capital</span>
      </div>
      <div className="flex items-center">
        <span className="text-gray-700 mr-4">{user}</span>
        <img src="/user-avatar.png" alt="User Avatar" className="h-8 w-8 rounded-full" />
      </div>
    </header>
  );
};

const HomePage = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 pt-20">
        <ReportSection />
      </div>
    </>
  );
};

export default withAuth(HomePage);
