import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'font-awesome/css/font-awesome.min.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = { username, email, password };

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/signup", newUser);
      if (response.status === 201) {
        toast.success("User registered successfully!");
        console.log('Registration token:', response.data.token); // Log the token to the console if returned
        setTimeout(() => {
          navigate('/login');
          setUsername('');
          setEmail('');
          setPassword('');
        }, 2000);
      } else {
        toast.error(response.data.message || "An unexpected error occurred.");
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response?.data?.message || "Something went wrong on the server.");
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="h-screen bg-blue-100 flex flex-col gap-5 justify-center items-center"
    >
      <h1 className="text-4xl font-semibold">Registration</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 mb-4 focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-4 focus:ring-2 focus:ring-blue-500"
          required
        />
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <i className="fas fa-eye-slash"></i> // Eye-slash icon for hiding password
            ) : (
              <i className="fas fa-eye"></i> // Eye icon for showing password
            )}
          </button>
        </div>

        <button
          className="p-3 w-full rounded-lg bg-slate-500 uppercase text-white mt-4"
          type="submit"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <div className="mt-4 text-center">
          <p>Already have an account?</p>
          <Link to="/login" className="text-blue-500 hover:text-blue-700">
            Log In
          </Link>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Signup;
