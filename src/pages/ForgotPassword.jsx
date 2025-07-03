import React, { useState } from "react";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSubmitted(false);

        if (!email) {
            setError("Please enter your email address.");
            return;
        }

        try {
            // Simulating successful submission for demo purposes
            setSubmitted(true);
            console.log("Reset email sent to:", email);
        } catch (err) {
            console.error("Error sending reset email:", err);
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div
            style={{
                maxWidth: 400,
                margin: "60px auto",
                padding: 32,
                border: "1px solid #e0e0e0",
                borderRadius: 16,
                background: "#fafbfc",
                boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                fontFamily: "Segoe UI, Arial, sans-serif",
            }}
        >
            <h2 style={{ textAlign: "center", marginBottom: 24, color: "#007bff" }}>
                Forgot Password
            </h2>
            {submitted ? (
                <div
                    style={{
                        color: "#155724",
                        background: "#d4edda",
                        border: "1px solid #c3e6cb",
                        padding: 16,
                        borderRadius: 8,
                        textAlign: "center",
                        fontWeight: 500,
                    }}
                >
                    If an account with that email exists, a password reset link has been sent.
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: 20 }}>
                        <label
                            htmlFor="email"
                            style={{
                                display: "block",
                                marginBottom: 6,
                                fontWeight: 500,
                                color: "#333",
                            }}
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            style={{
                                width: "100%",
                                padding: "12px 10px",
                                border: "1px solid #ccc",
                                borderRadius: 6,
                                fontSize: 16,
                                outline: "none",
                                transition: "border 0.2s",
                                boxSizing: "border-box",
                            }}
                            placeholder="Enter your email"
                        />
                    </div>
                    {error && (
                        <div
                            style={{
                                color: "#721c24",
                                background: "#f8d7da",
                                border: "1px solid #f5c6cb",
                                padding: 10,
                                borderRadius: 6,
                                marginBottom: 16,
                                fontSize: 15,
                            }}
                        >
                            {error}
                        </div>
                    )}
                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "12px 0",
                            background: "linear-gradient(90deg, #007bff 60%, #0056b3 100%)",
                            color: "#fff",
                            border: "none",
                            borderRadius: 6,
                            fontWeight: 600,
                            fontSize: 16,
                            cursor: "pointer",
                            boxShadow: "0 2px 8px rgba(0,123,255,0.08)",
                            transition: "background 0.2s",
                        }}
                    >
                        Send Reset Link
                    </button>
                </form>
            )}
            <div style={{ marginTop: 28, textAlign: "center" }}>
                <a
                    href="/login"
                    style={{
                        color: "#007bff",
                        textDecoration: "none",
                        fontWeight: 500,
                        fontSize: 15,
                    }}
                >
                    Back to Login
                </a>
            </div>
        </div>
    );
};

export default ForgotPassword;