import { css, jsx } from "@emotion/react";
import { useState } from "react";
import './App.css'
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import {Todo} from "./component/interfacesTodo";

// type TodoInfo = {
//   info : Todo
// }

//Todo Emotion Provider 설정
function App() {
  //Todo 상태 끌어올리기
  const [inputArray, setInputArray] = useState<Todo[]>([]);

  return (
    <div>
      <h1> ToDo List </h1>
      <TodoList/>
      <TodoForm />
    </div>


  )
}

export default App;
