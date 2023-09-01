import {GrAddCircle} from "react-icons/gr"
const TodoApp = () => {
    return (
        <div className="flex items-center justify-center">
            {/* todo card */}

            <div className="w-[500px] h-[700px] bg-gray-200 p-6 m-6 rounded-xl">
                <h1 className="text-2xl font-bold">Todo app</h1>
                <div className="my-4 bg-blue-300 rounded-full ps-4 pe-2 py-2 flex items-center justify-between">
                    <input type="text" placeholder="Enter Your Task" className="bg-transparent focus:outline-none" />

                    <div className="hover:bg-slate-600 p-1 rounded-full duration-300 ">

                    <GrAddCircle title="Add" className="text-xl " />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoApp;