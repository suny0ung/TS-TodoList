// import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import './App.css'
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import {Todo} from "./component/interfacesTodo";

//Todo Emotion Provider 설정
function App() {
  //Todo 상태 끌어올리기
  const [inputArray, setInputArray] = useState<Todo[]>([]);

  return (
    <TotalWrap>
      <div>
        <Title> ToDo List </Title>
        <TodoList inputArray={inputArray}/>
        <TodoForm inputArray={inputArray} setInputArray={setInputArray}/>
      </div>
    </TotalWrap>


  )
}

export default App;

const TotalWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
`;