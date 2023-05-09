import { Dispatch, SetStateAction  } from "react";
import styled from "@emotion/styled";
import TodoItem from "./TodoItem";
import {Todo} from "./interfacesTodo";

//아이템들 map으로 나열

  interface Props {
    // inputValue: string,
    inputArray: Todo[],
    setInputArray: Dispatch<SetStateAction<Todo[]>>
  }

  const TodoList = ({inputArray, setInputArray}:Props) => {
    
    return(
      <TodoItemBox>
        {inputArray.map((item)=>(
          <TodoItem key={item.id} id={item.id} inputValue={item.inputValue} inputArray={inputArray} setInputArray={setInputArray}/>
        ))}
      </TodoItemBox>
    );
  };

export default TodoList;

const TodoItemBox = styled.div`
  width: 100%;
  height: 300px;
  overflow-y: scroll;
  border: 1px solid gray;
  @media screen and (max-width: 500px){
    width: 100%;
    height: 550px;
    font-size: 15px;
  }
`;