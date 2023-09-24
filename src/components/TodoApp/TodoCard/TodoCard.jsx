import { useState } from "react";
import toast from "react-hot-toast";
import {
  BiSolidXCircle,
  BiXCircle,
  BiCheckCircle,
  BiSolidCheckCircle,
} from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

const TodoCard = ({ task, setStatus }) => {
  const [red, setRed] = useState(false);
  const [green, setGreen] = useState(false);

  const handleCompleteNotComplete = (value) => {
    const localData = JSON.parse(localStorage.getItem("todo_app"));
    const findItem = localData.find((d) => d._id === task?._id);

    findItem.todo_status = value;

    const newData = JSON.stringify(localData);
    localStorage.setItem("todo_app", newData);

    if (value === "complete") {
      toast.success("task complete");
      setStatus(1);
      setGreen(true);
      setRed(false);
    } else if (value === "notComplete") {
      toast.error("task failed");
      setStatus(2);
      setRed(true);
      setGreen(false);
    }
  };
  return (
    <div
      className={
        (task?.todo_status == "notComplete" &&
          "bg-red-100  p-2 rounded-md") ||
        (task?.todo_status == "complete" &&
          "bg-green-100  p-2 rounded-md") ||
        "bg-gray-200  p-2 rounded-md"
      }
    >
      <div className="flex items-start">
        <p className="w-5/6 text-sm font-semibold">{task?.todo_task}</p>
        <div className="w-1/6 flex items-center gap-1 justify-end text-[20px] ">
          <div onClick={() => handleCompleteNotComplete("notComplete")}>
            {task?.todo_status == "notComplete" ? (
              <BiSolidXCircle
                title="Failed"
                className="text-red-500 cursor-pointer"
              />
            ) : (
              <BiXCircle
                title="Not Complete"
                className="text-red-500 cursor-pointer"
              />
            )}
          </div>
          <div onClick={() => handleCompleteNotComplete("complete")}>
            {task?.todo_status == "complete" ? (
              <BiSolidCheckCircle
                title="Complete"
                className="text-green-500 cursor-pointer"
              />
            ) : (
              <BiCheckCircle
                title="Complete"
                className="text-green-500 cursor-pointer"
              />
            )}
          </div>
          <div>
            <MdDeleteForever
              title="Delete"
              className="text-orange-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="text-xs font-semibold text-gray-500 flex justify-between mt-2">
        <span>{task?.todo_date}</span>
        <span>{task?.todo_time}</span>
      </div>
    </div>
  );
};

export default TodoCard;
