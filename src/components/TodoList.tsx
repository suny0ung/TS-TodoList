import { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import TodoItem from './TodoItem';
import { Todo } from '../types/interfacesTodo';

interface TodoListProps {
  inputArray: Todo[];
  setInputArray: Dispatch<SetStateAction<Todo[]>>;
  limitItem: number;
  offsetItem: number;
}

const TodoList = ({
  inputArray,
  setInputArray,
  limitItem,
  offsetItem,
}: TodoListProps) => {
  return (
    <TodoItemBox>
      {inputArray.slice(offsetItem, offsetItem + limitItem).map(item => (
        <TodoItem
          key={item.id}
          id={item.id}
          inputValue={item.inputValue}
          inputArray={inputArray}
          setInputArray={setInputArray}
        />
      ))}
    </TodoItemBox>
  );
};

export default TodoList;

const TodoItemBox = styled.div`
  width: 100%;
  height: 320px;
  padding: 10px 0;
  overflow-y: scroll;
  overflow: hidden;
  border-bottom: 1px solid #adb2b7;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 550px;
    font-size: 15px;
  }
`;
