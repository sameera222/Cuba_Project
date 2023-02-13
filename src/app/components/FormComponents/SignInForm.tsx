"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import sign from "../../assets/SignIn.png";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
// import Router from "next/router";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

export const SignInForm = () => {
  //   {
  //     "email": "eve.holt@reqres.in",
  //     "password": "cityslicka"
  // }
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      // event?.preventDefault();
      const response = await axios.post("https://reqres.in/api/login", {
        email: data.email,
        password: data.password,
      });
      console.log(response);
      event?.preventDefault();
      // router.push("/Dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors, "errors");

  return (
    <div className="align-center h-full w-full">
      <div className="absolute w-full h-full">
        <Image alt="background Image" src={sign} quality="100" layout="fill" />
      </div>
      <div className="absolute bg-white shadow-2xl rounded w-3/12 left-2/3  top-44 h-3/6 text-black">
        <div className="flex flex-col items-start justify-center mt-30 p-3">
          <p className="text-black font-bold text-2xl">Sign In</p>
          <p className="text-black font-light text-xl">
            Enter your email and password to Login
          </p>
          {/* <form onSubmit={handleSubmit(onSubmit)}> */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-5 flex flex-col items-start ">
              <p className="text-black font-bold text-base ">Email Address</p>
              <input
                type="email"
                className="h-8 w-64 rounded bg-gray-200 border-2 border-slate-300"
                // value={email}
                {...register("email", {
                  required: "email is required",
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                })}
              />
              <p className="text-red-500 text-xs italic">
                {errors.email?.type === "required" && "Email is required"}
              </p>
              <p className="text-red-500 text-xs italic">
                {errors.email?.type === "pattern" && "Email is in wrong format"}
              </p>

              <p className="text-black font-bold text-base mt-5">Password</p>
              <input
                type="password"
                className="h-8 w-64 rounded bg-gray-200 border-2 border-slate-300 "
                {...register("password", {
                  required: "password is required",
                  minLength: 6,
                  maxLength: 20,
                })}
              />
              <p className="text-red-500 text-xs italic">
                {errors.password?.type === "minLength" &&
                  "Minimum 6 characters should be there"}
              </p>
              <p className="text-red-500 text-xs italic">
                {errors.password?.type === "maxLength" &&
                  "Maximum 20 characters can be there"}
              </p>
              <p className="text-red-500 text-xs italic">
                {errors.password?.type === "required" && "Password is required"}
              </p>
            </div>
            <div className="mt-5">
              <input type="checkbox" />
              <span className="p-2">Remember Password</span>
            </div>

            <div className="flex flex-col items-start mt-5">
              {/* <Link href="http://localhost:3000/Dashboard" passHref={true}> */}
              <button
                type="submit"
                className="bg-sky-700 rounded text-white w-32 h-8"
              >
                Sign In
              </button>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
