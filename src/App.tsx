// import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import './App.css'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {Todo} from './types/interfacesTodo';

//Todo Emotion Provider 설정
function App() {
  //Todo 상태 끌어올리기
  const [inputArray, setInputArray] = useState<Todo[]>([]);

  return (
    <TotalWrap>
      <div>
        <Title> ToDo List </Title>
        <TodoList inputArray={inputArray} setInputArray={setInputArray}/>
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

  @media screen and (max-width: 500px){
    font-size: 30px;
    margin: 0;
  }

`;