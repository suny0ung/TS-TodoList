import React, { useState, Dispatch, SetStateAction  } from "react";
import styled from "@emotion/styled";
// import {v4 as uuidv4} from 'uuid';
import {v4} from 'uuid';

import {Todo} from './interfacesTodo'

type TodoFormProps = {
  inputArray: Todo[];
  setInputArray: Dispatch<SetStateAction<Todo[]>>
  //Dispatch<SetStateAction>찾아보기
  // setInputArray: React.Dispatch<React.SetStateAction<Todo>>;
}

function TodoForm({inputArray, setInputArray}:TodoFormProps){
  const [inputValue, setInputValue] = useState<string>('');

  const uuid = v4();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    console.log(inputValue);
  }

  function addTodo (){
    const newTodo = {id: uuid, inputValue: inputValue};

    setInputArray([...inputArray, newTodo]);

    // inputArray.push({id: uuid, value: inputValue})

    // setInputArray((prev: inputArray) => ([
    //   ...prev,
    //   {id: uuid, value: inputValue}
    // ]))
    setInputValue('')
  }

  // input 값을 받아서 InputArray에 추가해준다.
  return(
    <div>
      <Form onSubmit={onSubmit}>
        <InputBox placeholder="입력란" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></InputBox>
        <InputButton onClick={addTodo}>추가</InputButton>
      </Form>
    </div>

  )
}

export default TodoForm;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.input`
  width: 400px;
  height: 30px;
`;

const InputButton = styled.button`
  width: 70px;
  height: 37px;
  border: 1px solid gray;
  font-size: 13px;
  border-radius: 0;
`;