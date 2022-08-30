import { useEffect, useState } from "react";
import { getAssignments } from "./api";
import AssignmentRow from "./AssignmentRow";
import { Assignment } from "./models/Assignment";

const AssignmentList = () => {
  const [assignment, setAssignment] = useState<Assignment[]>([]);

  useEffect(() => {
    getAssignments().then((data) => {
      setAssignment(data);
    });
  }, []);

  return (
    <div>
      {assignment.map((a) => (
        <AssignmentRow assignment={a} />
      ))}
    </div>
  );
};

export default AssignmentList;
