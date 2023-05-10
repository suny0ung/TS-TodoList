import React, { useState, Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
// import {v4 as uuidv4} from 'uuid';
import { v4 } from 'uuid';
import { Todo } from '../types/interfacesTodo';

type TodoFormProps = {
  inputArray: Todo[];
  setInputArray: Dispatch<SetStateAction<Todo[]>>;
};

function TodoForm({ setInputArray }: TodoFormProps) {
  const [inputValue, setInputValue] = useState<string>('');

  const uuid = v4();

  //재랜더링 방지
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValue);
  };

  function addTodo() {
    const newTodo = { id: uuid, inputValue: inputValue };

    setInputArray(todoInfo => [...todoInfo, newTodo]);

    setInputValue('');

    // inputArray.push({id: uuid, value: inputValue})

    // setInputArray((prev: inputArray) => ([
    //   ...prev,
    //   {id: uuid, value: inputValue}
    // ]))
  }

  // input 값을 받아서 InputArray에 추가해준다.
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <InputBox
          placeholder="입력란"
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
  justify-content: center;
  align-items: center;
  position: relative;
`;

const InputBox = styled.input`
  width: 100vw;
  max-width: 1024px;
  min-width: 100px;
  height: 31px;
  @media screen and (max-width: 500px) {
    width: 400px;
  }
`;

const InputButton = styled.button`
  width: 70px;
  height: 37px;
  position: absolute;
  right: -2px;
  border: 1px solid gray;
  font-size: 13px;
  border-radius: 0;
`;
