import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosinstance from "../utils/axiosInstance";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      // If user is already logged in, redirect to dashboard
      navigate("/dashboard");
    }
  }, [navigate]);

  const handlelogin = (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    
    try {
      // Simulate an API call for login
      const res = axiosinstance.post('/auth/login', {
        username: form.username,
        password: form.password,
      });

      res.then((response) => {
        if (response.data.success) {
          setLoading(false);
          alert("Login successful!");
          localStorage.setItem("token", response.data.token);
          navigate("/dashboard");
        }
      }).catch((error) => {
        setLoading(false);
        console.error("Login error:", error);
        setError(error.response.data.message || "An error occurred. Please try again.");
      });
    } catch (error) {
      setLoading(false);
      console.error("Login error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cleanWhite">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md border border-trueBlue">
        <h2 className="text-2xl font-bold text-trueBlue mb-4 text-center">Welcome Back</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              className={`w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-trueBlue ${error ? "border-red-500" : ""}`}
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className={`w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-trueBlue ${error ? "border-red-500" : ""}`}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="••••••••"
              required
            />
            <div className="text-right mt-1">
              <Link to="/forgot-password" className="text-xs text-trueBlue hover:underline">
                Forgot Password?
              </Link>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-trueBlue text-white py-2 rounded hover:bg-electricBlue transition"
            onClick={handlelogin}
          >
            Sign In
          </button>
        </form>

        <p className="text-sm mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-trueBlue font-medium hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
