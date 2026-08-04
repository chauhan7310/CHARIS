"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      // Login + Save token + Save user
      login(
        {
          id: response.data.data.id,
          fullName: response.data.data.fullName,
          email: response.data.data.email,
        },
        response.data.token
      );

      alert("Login Successful");

      router.push("/dashboard");
    } catch (error: any) {
      console.error(error);
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F5F2] flex items-center justify-center">
      <div className="bg-white w-[420px] rounded-3xl shadow-xl p-10">
        <h1 className="text-4xl font-bold text-center text-[#6A1E2A]">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Login to continue your luxury gifting journey.
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-8 p-4 rounded-xl border outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-5 p-4 rounded-xl border outline-none"
        />

        <button
          onClick={handleLogin}
          className="w-full mt-8 bg-[#6A1E2A] text-white py-4 rounded-xl hover:bg-[#4A1520] transition"
        >
          Login
        </button>

        <button
          className="w-full mt-4 border py-4 rounded-xl hover:bg-gray-100 transition"
        >
          Continue with Google
        </button>

        <p className="text-center mt-6">
          Don't have an account?

          <Link
            href="/register"
            className="text-[#6A1E2A] font-bold ml-2"
          >
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}