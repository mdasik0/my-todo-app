import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlinePlusCircle } from "react-icons/ai";
import TodoCard from "./TodoCard/TodoCard";

const TodoApp = () => {
  const [value, setValue] = useState(false);
  const [clear, setClear] = useState(false);
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('text');

  useEffect(() => {
    const getItemFromLocalStorage = localStorage.getItem("todo_app");
    const parsedData = JSON.parse(getItemFromLocalStorage);
    setData(parsedData);
  }, [status]);

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
  const handleAddTodo = () => {
    if (todoValue.current.value) {
      toast.success("Task Added!");
      const _id = [...Array(5)]
        .map(() => Math.floor(Math.random() * 10))
        .join("");

      const todo = todoValue.current.value;
      const todoStatus = "pending";
      const currentDate = new Date();
      const day = currentDate.getDate().toString().padStart(2, "0");
      const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based, so we add 1.
      const year = currentDate.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      const todoObject = {
        _id: _id,
        todo_task: todo,
        todo_status: todoStatus,
        todo_date: formattedDate,
        todo_time: currentTime,
      };

      const todoApp = JSON.parse(localStorage.getItem("todo_app")) || [];

      const newObjectToStore = [...todoApp, todoObject];

      setData(newObjectToStore);

      const stringifyBeforeStoring = JSON.stringify(newObjectToStore);

      localStorage.setItem("todo_app", stringifyBeforeStoring);

      todoValue.current.value = ''
      setClear(true)
    }
  };

  const handleDeleteTasks = (_id) => {
    const todoTasks = JSON.parse(localStorage.getItem("todo_app"));

    const indexToDelete = todoTasks.findIndex((task) => task._id === _id);

    if (indexToDelete !== -1) {
      todoTasks.splice(indexToDelete, 1);

      localStorage.setItem("todo_app", JSON.stringify(todoTasks));
      toast.success("Task Deleted")

      setStatus(_id)
    } else {
      console.log(`Item with _id ${_id} not found.`);
    }
  };
  //


  return (
    <div className="flex flex-col w-full items-center justify-center">
      {/* todo card */}
      <div>
        <div className="md:w-[500px] w-full h-[700px] bg-gray-200 md:p-6 p-3 md:m-6 m-0 my-4 rounded-xl">
          <h1 className="text-2xl font-bold">Todo app</h1>
          {/* input */}
          <div className="flex items-center">
            <div className="my-4 w-full bg-white rounded-full px-2 py-2 flex items-center justify-between">
              <input
                onChange={handleTodo}
                id="todo"
                ref={todoValue}
                name="todo"
                type="text"
                placeholder="Enter Your Task"
                className="bg-transparent px-2 w-full focus:outline-none"
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
              onClick={handleAddTodo}
              className={`text-sm ms-3 bg-green-500 h-full px-5 py-3 rounded-full active:bg-green-900 text-white font-semibold`}
            >
              Add
            </button>
          </div>
          <div className=" bg-img rounded-xl flex flex-col overflow-y-auto gap-3 scrollbar pt-3 ps-3 pb-3 pe-3 h-[540px]">
            {/* todo Card */}
            {data?.map((task) => (
              <TodoCard
                handleDeleteTasks={handleDeleteTasks}
                setStatus={setStatus}
                key={task._id}
                task={task}
              />
            ))}
          </div>
        </div>
      </div>
      <span className="text-sm font-semibold mb-6 text-gray-600">@ Created By <a title="visit portfolio" className="hover:underline duration-300" href="https://cute-concha-6a1a1e.netlify.app/">Md Asik</a> For Daily Use.</span>
    </div>
  );
};

export default TodoApp;
