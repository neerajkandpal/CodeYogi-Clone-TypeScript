import { FC } from "react";
import { Lecture } from "./models/lecture";
import { FaArrowCircleDown } from "react-icons/fa";

type LectureRowProps = { lecture: Lecture };

const LectureRow: FC<LectureRowProps> = ({ lecture }) => {
  return (
    <div className="p-5 w-auto px-6 m-5 font-semibold bg-white border-2 border-gray-50 rounded-md shadow-md ">
      <div className="flex flex-col ml-4 ">
        <div className="flex justify-start space-x-2 ">
          <h1 className="font-bold">Lecture #{lecture.id}</h1>
          <h3 className=" text-gray-500 font-semibold">{lecture.created_at}</h3>
        </div>
        <h3 className="text-sm text-gray-600 mt-2 ">
          {" "}
          Duration :({lecture.start_time})
        </h3>
      </div>

      <div className="p-2 rounded-md"> {lecture.topic} </div>

      <div className="flex justify-center items-center text-gray-600 my-3 mb-4">
        <FaArrowCircleDown /> <span className="mr-2"></span>
        <a href={lecture.recording_url}> Watch / Download recording</a>
      </div>
    </div>
  );
};

export default LectureRow;
