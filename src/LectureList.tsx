import React from "react";
import { useEffect, useState } from "react";
import { getLectures } from "./api";
import LectureRow from "./LectureRow";
import { Lecture } from "./models/lecture";

const LectureList = () => {
  const [lecture, setLecture] = useState<Lecture[]>([]);

  useEffect(() => {
    getLectures().then((data) => {
      setLecture(data);
    });
  }, []);

  return (
    <div>
      {lecture.map((l) => (
        <LectureRow key={l.id} lecture={l} />
      ))}
    </div>
  );
};

export default LectureList;
