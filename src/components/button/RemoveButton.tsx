import { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { Todo } from '../../types/interfacesTodo';

type RemoveProps = {
  id: string;
  setInputArray: Dispatch<SetStateAction<Todo[]>>;
};

function RemoveButton({ id, setInputArray }: RemoveProps) {
  const removeComment = (id: string) => {
    setInputArray(prevInputValue =>
      prevInputValue.filter(todo => todo.id !== id)
    );

    console.log(id);
  };
  return (
    <div>
      <RemoveBtn onClick={() => removeComment(id)}>✕</RemoveBtn>
    </div>
  );
}

export default RemoveButton;

const RemoveBtn = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 10px;
  border: none;
  background-color: white;
  font-size: 18px;
  color: #dee2e6;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;
