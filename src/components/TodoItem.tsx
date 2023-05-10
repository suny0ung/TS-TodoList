import { Dispatch, SetStateAction, useState } from 'react';
import styled from '@emotion/styled';
import RemoveButton from './RemoveButton';
import DoneButton from './doneButton';
import EditButton from './EditButton';
import { Todo } from '../types/interfacesTodo';

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
      {isCheckBox ? (
        <DoneItem>{inputValue}</DoneItem>
      ) : (
        <Item>{inputValue}</Item>
      )}
      {/* 완료한 TODO는 안보이게, 아직 안끝난 TODO는 수정버튼이 보이게 */}
      {!isCheckBox && <EditButton id={id} setInputArray={setInputArray} />}
      <RemoveButton id={id} setInputArray={setInputArray} />
    </ItemWrap>
  );
}

export default TodoItem;

const ItemWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
`;

const Item = styled.p`
  width: 100%;
`;

const DoneItem = styled.p`
  width: 100%;
  color: #c5c8ca;
  text-decoration: line-through;
`;
