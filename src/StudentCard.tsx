import React from "react";
import { FC } from "react";
import { Student } from "./models/Student";
import { RiTwitterFill, RiLinkedinBoxFill } from "react-icons/ri";

type StudentCardProps = { student: Student };

const StudentCard: FC<StudentCardProps> = ({ student }) => {
  return (
    <div className="bg-white p-3 w-80 h-full rounded-md shrink-0 mr-1 space-y-2 mt-5">
      <div className="flex justify-center">
        <img
          className="h-40 w-full object-cover rounded-md"
          src={student.picture.large}
        />
      </div>
      <div>
        <h1 className="text-lg font-bold">
          {student.name.title} {student.name.first} {student.name.last}
        </h1>
        <h1 className="text-lg text-blue-800">{student.nat}</h1>
      </div>
      <div className="flex items-center space-x-3 text-gray-500">
        <a className="text-2xl" href="">
          <RiTwitterFill />
        </a>
        <a className="text-2xl" href="">
          <RiLinkedinBoxFill />
        </a>
      </div>
    </div>
  );
};

export default StudentCard;
