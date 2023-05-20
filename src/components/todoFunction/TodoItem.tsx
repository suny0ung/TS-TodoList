import { Dispatch, SetStateAction, useState } from 'react';
import styled from '@emotion/styled';
import RemoveButton from '../button/RemoveButton';
import DoneButton from '../button/DoneButton';
import EditButton from '../button/EditButton';
import { Todo } from '../../types/interfacesTodo';

type TodoItemProps = {
  id: string;
  inputValue: string;
  inputArray: Todo[];
  setInputArray: Dispatch<SetStateAction<Todo[]>>;
};

function TodoItem({ id, inputValue, setInputArray }: TodoItemProps) {
  const [isCheckBox, setIsCheckBox] = useState<boolean>(false);

  return (
    <ItemWrap>
      <DoneButton isCheckBox={isCheckBox} setIsCheckBox={setIsCheckBox} />
      <EditButton
        id={id}
        inputValue={inputValue}
        setInputArray={setInputArray}
        isCheckBox={isCheckBox}
      />
      <RemoveButton id={id} setInputArray={setInputArray} />
    </ItemWrap>
  );
}

export default TodoItem;

const ItemWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;
