import React from "react";
import { Link } from "react-router-dom";
import { FC } from "react";
import { MdOutlineQuiz, MdAssignment } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineClockCircle } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";

const SideBar: FC = () => {
  return (
    <div className="flex flex-col fixed top-0 left-0 items-stretch h-screen space-y-3 p-5 w-60 bg-slate-800">
      <h1 className="text-2xl font-bold text-white pt-4 pb-4">
        <Link to="/lectures" className="flex items-center">
          <img
            className="h-10 w-10 space-x-3"
            src="https://app.codeyogi.io/assets/CodeYogiLogoWhite.64529273.svg"
          />
          CODEYOGI
        </Link>
      </h1>

      <Link to="/Quiz" className=" text-white">
        <div className="py-2 w-full flex space-x-3 hover:bg-gray-700 rounded-md">
          <div className="text-white text-2xl">
            <MdOutlineQuiz />
          </div>
          <p>Quiz</p>
        </div>
      </Link>

      <Link to="/lectures" className=" text-white">
        <div className="py-2 w-full flex space-x-3 hover:bg-gray-700 rounded-md">
          <div className="text-white text-2xl">
            <GiTeacher />
          </div>
          <p>Lectures</p>
        </div>
      </Link>

      <Link to="/assignments" className="text-white">
        <div className="py-2 w-full flex space-x-3 hover:bg-gray-700 rounded-md">
          <div className="text-white text-2xl">
            <MdAssignment />
          </div>
          <p>Assignments</p>
        </div>
      </Link>

      <Link to="/Students" className=" text-white">
        <div className="py-2 w-full flex space-x-3 hover:bg-gray-700 rounded-md">
          <div className="text-white text-2xl">
            <RiTeamFill />
          </div>
          <p>Students</p>
        </div>
      </Link>

      <span className="grow"></span>

      <Link to="/Profile" className="text-white">
        <div className="py-2 w-full flex space-x-3 hover:bg-gray-700 rounded-md">
          <div className="text-white text-2xl">
            <CgProfile />
          </div>
          <p>Profile</p>
        </div>
      </Link>
    </div>
  );
};

export default SideBar;
