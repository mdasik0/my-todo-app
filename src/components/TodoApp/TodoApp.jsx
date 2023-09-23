import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlinePlusCircle } from "react-icons/ai";
import TodoCard from "./TodoCard/TodoCard";

const TodoApp = () => {
  const [value, setValue] = useState(false);
  const [clear, setClear] = useState(false);
  const todoValue = useRef();

  const handleTodo = (e) => {
    e.preventDefault();
    const todoInput = e.target.value;
    if (todoInput) {
      setValue(true);
    } else {
      setValue(false);
    }
  };
  if (clear) {
    todoValue.current.value = "";
    setClear(false);
    setValue(false);
  }
  const handleClick = () => {
    if (todoValue.current.value) {
      return toast.success("value found!");
    }
    return toast.error("no value found");
  };

  
  return (
    <div className="flex items-center justify-center">
      {/* todo card */}
      <div>
        <div className="w-[500px] h-[700px] bg-gray-200 p-6 m-6 rounded-xl">
          <h1 className="text-2xl font-bold">Todo app</h1>
          {/* input */}
          <div className="flex items-center">
            <div className="my-4 w-full bg-white rounded-full ps-4 pe-2 py-2 flex items-center justify-between">
              <input
                onChange={handleTodo}
                id="todo"
                ref={todoValue}
                name="todo"
                type="text"
                placeholder="Enter Your Task"
                className="bg-transparent w-full focus:outline-none"
              />

              <div className="hover:bg-slate-600 p-1 rounded-full duration-300 ">
                {value ? (
                  <AiOutlinePlusCircle
                    onClick={() => setClear(true)}
                    title="Clear"
                    className="text-xl hover:text-white cursor-pointer text-red-500 duration-300 rotate-45"
                  />
                ) : (
                  <AiOutlinePlusCircle
                    title="Add"
                    className="text-xl hover:text-white cursor-pointer text-green-500 duration-300"
                  />
                )}
              </div>
            </div>
            <button
              onClick={handleClick}
              className={`text-sm ms-3 bg-green-500 h-full px-5 py-3 rounded-full active:bg-green-900 text-white font-semibold`}
            >
              Add
            </button>
          </div>
          <div className=" bg-white rounded-xl flex flex-col overflow-y-auto gap-3 scrollbar pt-3 ps-3 pb-3 pe-3 h-[540px]">
            {/* todo Card */}
            <TodoCard />
            <TodoCard />
            <TodoCard />
            <TodoCard />
            <TodoCard />
            <TodoCard />
            <TodoCard />
            <TodoCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
