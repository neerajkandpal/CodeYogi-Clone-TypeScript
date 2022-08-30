import React from "react";
import StudentCard from "./StudentCard";
import { useState, useEffect } from "react";
import { getStudents } from "./api";
import { Student } from "./models/Student";

const StudentList = () => {
  const [Student, setStudent] = useState<Student[]>([]);

  useEffect(() => {
    getStudents().then((data) => {
      setStudent(data);
    });
  }, []);

  return (
    <div>
      <h3 className="text-xl font-semibold p-5">Student List</h3>
      <div className="flex justify-between flex-wrap grow-1 ml-5">
        {Student.map((u) => (
          <StudentCard student={u} />
        ))}
        <span className="w-80" />
        <span className="w-80" />
      </div>
    </div>
  );
};

export default StudentList;
