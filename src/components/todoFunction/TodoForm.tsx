import React, { useState, Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
// import {v4 as uuidv4} from 'uuid';
import { v4 } from 'uuid';
import { Todo } from '../../types/interfacesTodo';

type TodoFormProps = {
  inputArray: Todo[];
  setInputArray: Dispatch<SetStateAction<Todo[]>>;
};

function TodoForm({ setInputArray }: TodoFormProps) {
  const [inputValue, setInputValue] = useState<string>('');

  const uuid = v4();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(inputValue);
  };

  function addTodo() {
    const newTodo = { id: uuid, inputValue: inputValue };

    setInputArray(todoInfo => [...todoInfo, newTodo]);

    setInputValue('');
  }

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <InputBox
          placeholder="할 일을 입력해 주세요"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        ></InputBox>
        <InputButton onClick={addTodo}>추가</InputButton>
      </Form>
    </div>
  );
}

export default TodoForm;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

const InputBox = styled.input`
  width: 100vw;
  max-width: 1056px;
  min-width: 500px;
  padding-left: 20px;
  height: 40px;
  border: none;

  @media screen and (max-width: 700px) {
    width: 400px;
  }
  &::placeholder {
    padding-left: 7px;
    font-size: 15px;
  }
`;

const InputButton = styled.button`
  width: 70px;
  height: 44px;

  position: absolute;
  right: -1px;

  background-color: #e4edf6;
  border: 1px solid #adb2b7;

  font-size: 13px;

  &:hover {
    background-color: #9cc7f1;
    color: white;
  }
`;
