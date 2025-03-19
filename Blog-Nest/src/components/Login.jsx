import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { login as authLogin } from "../features/authSlice";
import { Button } from "@mantine/core";
import { Input, Logo } from "./index";
import { useForm } from "react-hook-form";

import React from "react";
import authService from "../appwrite/auth";

function Login(data) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm(); // react hook form docs also handleSubmit is a keyword
  const [error, setError] = useState("");
  const login = async () => {
    setError(""); // initially there should not be any error
    try {
      const session = await authService.login(data);
      if (!session) return;
      const userData = await authService.getCurrentUser();
      if (!userData) return;
      dispatch(login(userData));
      navigate("/"); // link cant progamitacally navigate the user so using navigate()
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email: "
              placeholder="Enter your email" // we dont have placeholder destructuted at props but ...props is used which will handle it
              type="email"
              {...register("email", {
                // note : spreading is necessary
                required: true,
                validate: {
                  // regex valodation
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" color="blue" variant="filled">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
