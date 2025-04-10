import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext"; // import context
import { assets } from "../assets/assets";
import "./Login.css"; 

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth(); // use login function from context
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      login(); // mark user as logged in
      navigate("/dashboard");
    } else {
      alert("गलत प्रयोगकर्ता नाम वा पासवर्ड");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <div className="flex flex-col items-center mb-6">
          <img src={assets.logo} id="logo" alt="Logo" className="h-16 mb-2" />
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            शिक्षा शाखा पत्र व्यवस्थापन
          </h2>
          <p className="text-gray-500 text-sm">हेटौंडा उपमहानगरपालिका</p>
        </div>

        <form onSubmit={handleLogin} className="form space-y-5">
          <div>
            <label className="block text-sm text-gray-700 mb-1">प्रयोगकर्ता नाम</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="username"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">पासवर्ड</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            लगइन गर्नुहोस्
          </button>
        </form>
      </div>
    </div>
  );
}
