
import { Link } from 'react-router-dom';
import "../Homepage/index.css"



function HomePage() {
 



  return (
    <div className="min-h-screen bg-gray-100">
     
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <Link to="/products" className="text-xl font-bold">
            Products
          </Link> 
          <Link to="/about" className="text-xl font-bold">
            About
          </Link>
         
        </div>
      </nav>
      <main className="container mx-auto mt-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">Welcome to Ken`s Gadgets</h1>

        <div className="flex space-x-4 mb-4">
          <Link to="/login">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Register
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
