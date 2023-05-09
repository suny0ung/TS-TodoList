import { Dispatch, SetStateAction, useState  } from "react";
import styled from '@emotion/styled';
import RemoveButton from './RemoveButton';
import DoneButton from './doneButton';
import {Todo} from "./interfacesTodo";

type TodoItemProps = {
  id: string,
  inputValue: string,
  completed?: boolean;
  inputArray: Todo[],
  setInputArray: Dispatch<SetStateAction<Todo[]>>
}

function TodoItem({ id, inputValue, setInputArray, completed}: TodoItemProps){
  const [changeCheckBox, setChangeCheckBox]=useState<boolean>(false);

  const handleCheckedBox = (event: React.MouseEvent<HTMLElement>) => {
    if(event === true){
      setChangeCheckBox(true)
    }
  }

  return(
    <ItemWrap>
      <DoneButton completed={completed} onClick={()=>handleCheckedBox(id)}/>
      <Item>{inputValue}</Item>
      <RemoveButton id={id} setInputArray={setInputArray}/>
    </ItemWrap>
  )
}

export default TodoItem;

const ItemWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.p`
  width: 100%;
`;
