import "./App.css";
import  {Toaster } from "react-hot-toast";

import TodoApp from "./components/TodoApp/TodoApp";

function App() {
  return (
    <>
      <TodoApp />
      <Toaster />

    </>
  );
}

export default App;

