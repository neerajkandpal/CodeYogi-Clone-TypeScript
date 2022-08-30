import React from "react";
import LectureList from "./LectureList";
import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import StudentList from "./StudentList";
import MainLayout from "./MainLayout";
import AssignmentList from "./AssignmentList";
import Quiz from "./Quiz";
import Profile from "./Profile";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Students" />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="lectures" element={<LectureList />}></Route>
            <Route path="assignments" element={<AssignmentList />}></Route>
            <Route path="Students" element={<StudentList />}></Route>
            <Route path="Profile" element={<Profile />}></Route>
          </Route>
          <Route path="Quiz" element={<Quiz />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
