import React, { FC } from "react";

import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { Assignment } from "./models/Assignment";

type AssignmentRowProps = { assignment: Assignment };

const AssignmentRow: FC<AssignmentRowProps> = ({ assignment }) => {
  const [showPopup, updateShowPopup] = React.useState(false);

  const hidePopup = () => {
    updateShowPopup(false);
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="px-80 py-2 font-bold mt-4 flex flex-col space-y-4 bg-white shadow-md rounded-md">
        <div onClick={() => navigate(`/assignments/${assignment.id}/details`)}>
          <div className="flex space-x-4">
            <h1 className="font-semibold"> #{assignment.id}</h1>
            <h1 className="font-semibold">{assignment.title}</h1>

            <h3 className="text-gray-400 font-bold">
              ({assignment.updated_at})
            </h3>
          </div>
          <h2 className="text-red-600">Due Date:{assignment.due_date}</h2>

          <h2 className="text-green-600 flex justify-end">Submited</h2>
        </div>
        <div>
          <Button onClick={() => updateShowPopup(true)}>Submit</Button>

          <a className="text-blue-500 underline">See Your Submission</a>
        </div>
      </div>
      {showPopup && (
        <div className="p-10  bg-yellow-400 W-32 h-48 shadow-lg rounded-lg flex justify-center space-x-4  ">
          <div className="flex flex-col">
            <button
              onClick={hidePopup}
              className="rounded-full p-1 flex justify-end text-red-500 font-extrabold mb-6 "
            >
              X
            </button>
            <div className="flex space-x-4">
              <input
                placeholder="Submission link"
                className="px-20  rounded-md border  border-black ml-4"
                type="text"
              />
              <Button onClick={() => console.log("j")}> Save</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignmentRow;
