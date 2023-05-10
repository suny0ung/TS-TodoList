import { Dispatch, SetStateAction, useState } from 'react';
import styled from '@emotion/styled';
import RemoveButton from './RemoveButton';
import DoneButton from './doneButton';
import { Todo } from '../types/interfacesTodo';

type TodoItemProps = {
  id: string;
  inputValue: string;
  completed?: boolean;
  inputArray: Todo[];
  setInputArray: Dispatch<SetStateAction<Todo[]>>;
};

function TodoItem({ id, inputValue, setInputArray }: TodoItemProps) {
  // const [isCheckBox, setIsCheckBox] = useState<typeof completed>(false);
  const [isCheckBox, setIsCheckBox] = useState<boolean>(false);

  return (
    <ItemWrap>
      <DoneButton isCheckBox={isCheckBox} setIsCheckBox={setIsCheckBox} />
      {isCheckBox ? (
        <DoneItem>{inputValue}</DoneItem>
      ) : (
        <Item>{inputValue}</Item>
      )}
      {/* <Item>{inputValue}</Item> */}
      <RemoveButton id={id} setInputArray={setInputArray} />
    </ItemWrap>
  );
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

const DoneItem = styled.p`
  width: 100%;
  color: #c5c8ca;
  text-decoration: line-through;
`;
