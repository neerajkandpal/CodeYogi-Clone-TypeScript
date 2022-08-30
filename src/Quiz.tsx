import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function Quiz() {
  return (
    <div className="h-full grow bg-gray-100">
      <div className=" bg-gray-800 flex justify-between px-10 items-center text-white">
        <div className="flex space-x-4 font-semibold">
          <Link to="/">
            <img
              className="h-10 w-10 space-x-3"
              src="https://app.codeyogi.io/assets/CodeYogiLogoEnglishWhite.a677159f.svg"
            />
          </Link>
          <span className="text-3xl">|</span>
          <h3 className="text-lg mt-2">Welcome, Neeraj</h3>
        </div>
        <div className="flex space-x-5 my-1">
          <p className="py-2 px-4 bg-blue-600">
            {" "}
            <AiOutlineClockCircle /> 00:00
          </p>
          <p className="py-2 px-4 bg-blue-600">Logout</p>
        </div>
      </div>
      <h2 className="font-bold flex justify-center items-center min-h-screen">
        No Active Question
      </h2>
    </div>
  );
}

export default Quiz;
