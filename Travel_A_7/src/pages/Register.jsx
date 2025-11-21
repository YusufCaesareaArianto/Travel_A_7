import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(formData));

    alert("Account created!\n" + JSON.stringify(formData, null, 2));

    navigate("/login");
  };

  return (
    <div className="bg-[#fffdf6] h-[1080px] relative overflow-hidden">

      <img
        className="w-[782px] h-[1080px] absolute left-0 top-0 object-cover"
        src="/bg-regis.png"
        alt=""
      />

      <img
        className="absolute left-[1086px] top-[126px]"
        src="/logo.svg"
        alt=""
      />

      <h1 className="text-black text-[32px] font-bold absolute left-[1098px] top-[301px]">
        Create Your Account
      </h1>

      <p className="text-black text-[22px] font-medium absolute left-[1098px] top-[360px] w-[518px]">
        Discover hidden gems, exclusive offers and unforgettable travel
        experiences in Yogyakarta.
      </p>

      <form onSubmit={handleSubmit}>
        
        <label className="text-black text-[22px] font-semibold absolute left-[1128px] top-[457px]">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="bg-white rounded-[20px] border border-[#00a9ff] w-[518px] h-[54px] absolute left-[1098px] top-[497px] px-4"
          placeholder="Enter your name..."
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label className="text-black text-[22px] font-semibold absolute left-[1128px] top-[568px]">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="bg-white rounded-[20px] border border-[#00a9ff] w-[518px] h-[54px] absolute left-[1098px] top-[614px] px-4"
          placeholder="Enter your email..."
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label className="text-black text-[22px] font-semibold absolute left-[1128px] top-[685px]">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="bg-white rounded-[20px] border border-[#00a9ff] w-[518px] h-[54px] absolute left-[1098px] top-[725px] px-4"
          placeholder="Enter your password..."
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="bg-[#00a9ff] text-white text-[22px] font-semibold rounded-[20px] w-[518px] h-[54px] absolute left-[1098px] top-[839px]"
        >
          Sign Up
        </button>
      </form>

      <img
        className="absolute left-[1390px] top-[830px]"
        src="/icon.svg"
        alt=""
      />

      <div className="text-lg absolute left-[1098px] top-[932px]">
        <span>Already have an account?</span>{" "}
        <span
          className="text-[#00a9ff] cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Sign In Here
        </span>
      </div>

      <img className="absolute left-[1616px] top-[275px]" src="/frame-atas.svg" alt="" />
      <img className="absolute left-[1616px] top-[805px]" src="/frame-bawah.svg" alt="" />
    </div>
  );
};

export default Register;
