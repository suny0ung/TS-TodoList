import styled from '@emotion/styled';
import { useState } from 'react';
import './App.css';
import TodoForm from './components/todoFunction/TodoForm';
import TodoList from './components/todoFunction/TodoList';
import Pagination from './components/pagination/Pagination';
import { Todo } from './types/interfacesTodo';

function App() {
  const [inputArray, setInputArray] = useState<Todo[]>([]);

  //시작하는 페이지 값-> 1
  const [pageNum, setPageNum] = useState(1);

  //한 페이지당 보여줄 아이템의 갯수 -> 5개
  const limitItem = 5;
  const offsetItem = (pageNum - 1) * limitItem;

  return (
    <TotalWrap>
      <div>
        <Title> ToDo List </Title>
        <TodoWrap>
          <TodoList
            inputArray={inputArray}
            setInputArray={setInputArray}
            limitItem={limitItem}
            offsetItem={offsetItem}
          />
          <TodoForm inputArray={inputArray} setInputArray={setInputArray} />
        </TodoWrap>
        <Pagination
          inputArray={inputArray}
          pageNum={pageNum}
          setPageNum={setPageNum}
          limitItem={limitItem}
          offsetItem={offsetItem}
        />
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

  @media screen and (max-width: 700px) {
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
