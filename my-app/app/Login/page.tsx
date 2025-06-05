/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import CryptoJS from "crypto-js";
import React, { useState, useContext } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import axios from "axios";

export default function Login() {

  const [loginform, setLoginForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;
    const safeEmailCharacters = /^[a-zA-Z0-9@._-]*$/;

    if (id === "username" && !safeEmailCharacters.test(value)) {
      alert("Only safe characters are allowed in the username.");
      return;
    }

    setLoginForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/login", loginform);
      const secretKey = "your-strong-secret-key";
      const encryptedUser = CryptoJS.AES.encrypt(
        JSON.stringify(res.data.user),
        secretKey
      ).toString();
      localStorage.setItem("user", encryptedUser);
      window.location.href = '/Dashboard';
      // Optionally redirect or show success message
      console.log("Login successful");
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder="Enter your username"
              value={loginform.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={loginform.password}
              onChange={handleChange}
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
