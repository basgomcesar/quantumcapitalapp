import React from 'react';
import Navbar from '@/components/Navbar';
const HomePage = () => {
  return (
	<>
	<Navbar/>
	<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
	  <h1>Welcome to Quantum Capital App</h1>
	  <p>This is the home page.</p>
	</div>
	</>
  );
};

export default HomePage;
