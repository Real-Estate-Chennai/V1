import { IoPersonCircleSharp } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  // Check if user is authenticated
  const isAuthenticated = !!window.localStorage.getItem("loggedIn");

  // Logout function
  const handleLogout = () => {
    window.localStorage.removeItem("loggedIn");
    window.localStorage.removeItem("userType");
    navigate('/login'); // Redirect to login after logout
  };

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/', css: "text-white hover:bg-gray-700 px-3 py-2 rounded" },
    { name: 'Apartment', path: '/apartments', css: "text-white hover:bg-gray-700 px-3 py-2 rounded" },
    { name: 'Land/Plots', path: '/land-plots', css: "text-white hover:bg-gray-700 px-3 py-2 rounded" },
    { name: 'Individual House', path: '/individual-house', css: "text-white hover:bg-gray-700 px-3 py-2 rounded" },
    { name: 'Ongoing Project', path: '/ongoing-projects', css: "text-white hover:bg-gray-700 px-3 py-2 rounded" },
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-800 to-pink-500 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-semibold">
          Real Estate
        </Link>
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.name} className="justify-center items-center">
              <Link
                to={item.path}
                className={item.css}
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* Conditionally render 'Login' or 'Logout' */}
          {!isAuthenticated ? (
            <>
              <li>
                <Link className="text-white bg-blue-700 px-3 py-2 rounded" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="text-white bg-blue-700 px-3 py-2 rounded" to="/login">
                  Post Your Property
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/user/dashboard" className="text-white flex items-center">
                  <IoPersonCircleSharp size={35} />
                </Link>
              </li>
              <li>
                <button
                  className="text-white bg-red-600 px-3 py-2 rounded"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
