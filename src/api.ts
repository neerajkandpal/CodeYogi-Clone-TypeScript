import axios from "axios";
import { Lecture } from "./models/lecture";
import { Student } from "./models/Student";

type UserResponse = { results: Student[] };

const Codeyogi_Base_Url = "https://api.codeyogi.io/";
const RandomUser_Base_Url = "https://randomuser.me/api/";

export const getLectures = async () => {
  const response = await axios.get<Lecture[]>(
    Codeyogi_Base_Url + "batches/1/sessions",
    { withCredentials: true }
  );

  return response.data;
};

export const getStudents = async () => {
  const response = await axios.get<UserResponse>(
    RandomUser_Base_Url + "?results=15"
  );
  console.log(response.data.results);
  return response.data.results;
};

export const getAssignments = async () => {
  const response = await axios.get(
    Codeyogi_Base_Url + "batches/1/assignments",
    { withCredentials: true }
  );
  console.log(response.data);
  return response.data;
};
