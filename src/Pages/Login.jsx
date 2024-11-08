import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5"; // import react-icons


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loadingRequest, setLoadingRequest] = useState(false);
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoadingRequest(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        { email: formData.email, password: formData.password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200 && response.data.token) {
        const token = response.data.token;

        console.log("Token received:", token);

        setSuccess("Login successful!"); // Success message

        localStorage.setItem("token", token);
        console.log(
          "Token stored in localStorage:",
          localStorage.getItem("token")
        );

        navigate("/user/dashboard"); // Redirect to the user dashboard
      } else {
        setError(response.data.message || "Token not received.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoadingRequest(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  return (
    <div
      className="h-[800px] bg-blue-100 flex flex-col gap-5 justify-center items-center"
      style={{
      
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white p-6 rounded-3xl shadow-md"
      >
        <h2 className="text-center text-3xl mb-4">Login</h2>

        <input
          className="border p-3 rounded-lg w-full mb-4"
          name="email"
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <div className="relative mb-4">
          <input
            className="border p-3 rounded-lg w-full"
            name="password"
            placeholder="Password"
            type={showPassword ? "text" : "password"} // Toggle password visibility
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <IoEyeOff size={24} /> // Use IoEyeOff for hiding
            ) : (
              <IoEye size={24} /> // Use IoEye for showing
            )}
          </button>
        </div>

        <button
          className="p-3 w-full rounded-lg bg-slate-500 uppercase text-white mt-4"
          type="submit"
          disabled={loadingRequest}
        >
          {loadingRequest ? "Logging in..." : "Login"}
        </button>

        {success && (
          <p className="text-green-500 text-center mb-4">{success}</p> 
        )}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>} 
      </form>

      <div className="mt-4 text-center">
        <Link
          to="/forgot-password"
          className="text-blue-500 hover:text-blue-700"
        >
          Forgot Password?
        </Link>
        <p className="mt-4">Don’t have an account?</p>
        <Link to="/registration" className="text-blue-500 hover:text-blue-700">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
