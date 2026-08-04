"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import api from "@/lib/api";

export default function Register() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await api.post("/auth/register", {
        fullName,
        email,
        password,
      });

      alert(response.data.message);

      router.push("/login");
    } catch (error: any) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F5F2] flex items-center justify-center">
      <div className="bg-white w-[420px] rounded-3xl shadow-xl p-10">

        <h1 className="text-4xl font-bold text-center text-[#6A1E2A]">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full mt-8 p-4 rounded-xl border outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-5 p-4 rounded-xl border outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-5 p-4 rounded-xl border outline-none"
        />

        <button
          onClick={handleRegister}
          className="w-full mt-8 bg-[#6A1E2A] text-white py-4 rounded-xl hover:bg-[#4a1620] transition"
        >
          Register
        </button>

        <p className="text-center mt-6">
          Already have an account?

          <Link
            href="/login"
            className="text-[#6A1E2A] font-bold ml-2"
          >
            Login
          </Link>
        </p>

      </div>
    </main>
  );
}