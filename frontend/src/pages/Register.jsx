import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const [form, setForm] = useState({ username: "", email: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        if (!form.username || !form.email || !form.password) {
            setError("Please fill in all fields");
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert("Registration successful!");
            setForm({ username: "", email: "", password: "" });
            setError("");
            // Redirect to login 
            navigate("/login");

        }, 1000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cleanWhite">
            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md border border-trueBlue">
                <h2 className="text-2xl font-bold text-trueBlue mb-4 text-center">
                    Create an Account
                </h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Username</label>
                        <input
                            type="text"
                            className={`w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-trueBlue ${error ? "border-red-500" : ""}`}
                            value={form.username}
                            onChange={(e) => setForm({ ...form, username: e.target.value })}
                            placeholder="yourusername"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            className={`w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-trueBlue ${error ? "border-red-500" : ""}`}
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="you@example.com"
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
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button
                        type="submit"
                        onClick={handleRegister}
                        disabled={loading}
                        className="w-full bg-trueBlue text-white py-2 rounded hover:bg-electricBlue transition"
                    >
                        Register
                    </button>
                </form>

                <p className="text-sm mt-4 text-center">
                    Already have an account?{" "}
                    <Link to="/" className="text-trueBlue font-medium hover:underline">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
}
