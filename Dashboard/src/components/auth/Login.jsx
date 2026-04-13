import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function GlassLogin() {
  const navegate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }
    if (!formData.email.includes("@")) {
      setError("Enter a valid email!");
      return;
    }


    setError("");
    
    
      axios.post("http://localhost:8080/api/v1/api/auth/login", formData, { withCredentials: true })
        .then((response) => {
          navegate("/")
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    

  };

  return (
    <div className="relative h-screen flex items-center justify-center bg-linear-to-br from-[#022c22] to-[#064e3b] overflow-hidden">

   
      <form
        onSubmit={handleSubmit}
        className="w-150 h-150 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_60px_rgba(34,197,94,0.3)] flex flex-col items-center justify-center text-white"
      >
        <h2 className="text-2xl mb-4">LOGIN</h2>
        {error && (
          <p className="text-red-400 text-sm mb-2">{error}</p>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-100 mb-3 p-4 rounded-lg bg-white/20 outline-none"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-100 mb-4 p-4 rounded-lg bg-white/20 outline-none"
        />

        <button
          type="submit"
          className="px-20 py-4 bg-green-500 rounded-full hover:bg-green-400 transition"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}