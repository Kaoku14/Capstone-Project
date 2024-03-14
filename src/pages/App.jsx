// eslint-disable-next-line no-unused-vars
import React from 'react';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-400 flex justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Welcome!</h2>
        <div className="flex justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
            Login
          </button>
          <button className="border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
