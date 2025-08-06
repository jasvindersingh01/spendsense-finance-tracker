import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { handleLogin } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = handleLogin(email, password);
        if (success) {
            navigate("/dashboard");
        } else {
            alert("Invalid Credential!")
        }
    }
    return (
       <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
  <form
    onSubmit={handleSubmit}
    className="bg-gray-800 p-8 rounded-2xl shadow-md w-full max-w-md"
  >
    <h2 className="text-2xl font-bold mb-6 text-center text-white">
      Login
    </h2>

    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-300">
        Email:
      </label>
      <input
        type="text"
        id="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div className="mb-6">
      <label htmlFor="password" className="block text-sm font-medium text-gray-300">
        Password:
      </label>
      <input
        type="password"
        id="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
    >
      Login
    </button>

    <div className="flex m-5 justify-center items-center">
      Don’t have an account? <Link to="/signup" className="text-blue-400 ml-1">Sign Up</Link>
    </div>
  </form>
</div>


    )
}

export default Login;