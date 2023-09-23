import { useState } from "react";
import toast from "react-hot-toast";
import {
    BiSolidXCircle,
    BiXCircle,
    BiCheckCircle,
    BiSolidCheckCircle
  } from "react-icons/bi";
  import {MdDeleteForever} from "react-icons/md"
  
  const TodoCard = () => {
    const [red, setRed] = useState(false);
    const [green, setGreen] = useState(false);
    const handleCompleteNotComplete = (value) => {
      if (value === "complete") {
        toast.success("task complete");
        setGreen(true);
        setRed(false);
      } else if (value === "notComplete") {
        toast.error("task failed");
        setRed(true);
        setGreen(false);
      }
    };
  return (
    <div className={red && "bg-red-100 flex items-start p-2 rounded-md" || green && "bg-green-100 flex items-start p-2 rounded-md" || "bg-gray-200 flex items-start p-2 rounded-md"}>
      <p className="w-5/6 text-sm font-semibold">
        Todo Text Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
        aperiam quos accusantium asperiores dolores praesentium fugiat
        voluptatum magnam, quas tempore, nobis odit repellat vel incidunt?
      </p>
      <div className="w-1/6 flex items-center gap-1 justify-end text-[20px] ">
        <div onClick={() => handleCompleteNotComplete("notComplete")}>
          {red ? (
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
          {green ? (
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
  );
};

export default TodoCard;
