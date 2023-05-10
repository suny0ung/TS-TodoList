import styled from '@emotion/styled';
import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Todo } from './types/interfacesTodo';

function App() {
  const [inputArray, setInputArray] = useState<Todo[]>([]);

  return (
    <TotalWrap>
      <div>
        <Title> ToDo List </Title>
        <TodoWrap>
          <TodoList inputArray={inputArray} setInputArray={setInputArray} />
          <TodoForm inputArray={inputArray} setInputArray={setInputArray} />
        </TodoWrap>
      </div>
    </TotalWrap>
  );
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

  color: #6989a9;

  @media screen and (max-width: 500px) {
    font-size: 30px;
    margin: 0;
  }
`;

const TodoWrap = styled.div`
  width: fit-content;
  border: 1px solid #adb2b7;
  /* box-shadow: 1px 3px 5px #adb2b7; */
  /* color: #6989a9; */
`;
