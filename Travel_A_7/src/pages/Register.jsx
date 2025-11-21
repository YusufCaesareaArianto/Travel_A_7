import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// FIX PATH ASSETS SESUAI FOLDER KAMU
import bgRegis from "../assets/bg-regis.png";
import group0 from "../assets/logo.svg";
import vector0 from "../assets/icon.svg";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="bg-[#fffdf6] h-screen w-full relative overflow-hidden">

      <img
        src={bgRegis}
        className="h-full absolute left-0 top-0"
        alt="Background"
      />

      <form
        onSubmit={handleSubmit}
        className="absolute left-[1100px] top-[250px] w-[520px]"
      >
        <img src={group0} alt="Logo" className="w-20 mb-4" />

        <h1 className="text-[32px] font-bold mb-2">
          Create Your Account
        </h1>

        <p className="text-[20px] text-gray-700 mb-10">
          Discover hidden gems, exclusive offers and unforgettable travel experiences in Yogyakarta.
        </p>

        <label className="text-[20px] font-semibold">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name..."
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border border-[#00a9ff] rounded-[20px] px-5 py-3 mt-2 mb-6"
        />

        <label className="text-[20px] font-semibold">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email..."
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border border-[#00a9ff] rounded-[20px] px-5 py-3 mt-2 mb-6"
        />

        <label className="text-[20px] font-semibold">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password..."
          value={form.password}
          onChange={handleChange}
          required
          className="w-full border border-[#00a9ff] rounded-[20px] px-5 py-3 mt-2 mb-10"
        />

        <button
          type="submit"
          className="w-full bg-[#00a9ff] text-white text-[22px] font-semibold py-3 rounded-[20px]"
        >
          Sign Up
        </button>

        <p className="text-[18px] mt-6">
          Already have an account?{" "}
          <span
            className="text-[#00a9ff] cursor-pointer font-semibold"
            onClick={() => navigate("/login")}
          >
            Sign In Here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
