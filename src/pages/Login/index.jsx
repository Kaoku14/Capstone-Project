import { useState } from 'react';
import icon from '../../assets/logo.png';
import './app.css';




function LoginPage() {
  const [username, setUsername] = useState('');

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

 

  return (
    <div id="clobber" className="min-h-screen bg-gray-500">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <img src={icon} alt="Spanner image" />
          <h1 className="text-xl font-bold">Ken`s Garage</h1>
          <div className="flex items-center">
            {/* Add more links to the navbar as needed */}
            <a href="#" className="text-gray-600 px-3 hover:text-gray-800">Home</a>
          </div>
        </div>
      </nav>

      <main className="flex justify-center items-center h-screen">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <form >
            <div className="mb-8">
              <label htmlFor="username" className="block text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleInputChange}
                className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
              />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
