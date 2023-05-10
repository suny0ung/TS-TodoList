import { Dispatch, SetStateAction, useState } from 'react';
import styled from '@emotion/styled';
import { Todo } from '../types/interfacesTodo';

type Props = {
  id: string;
  setInputArray: Dispatch<SetStateAction<Todo[]>>;
};

const EditButton = ({ setInputArray, id }: Props) => {
  //수정버튼을 클릭했을때 수정모드를 확인하는 useState
  const [isEdited, setIsEdited] = useState(false);
  const [switchValue, setSwitchValue] = useState('');

  //클릭시 세터함수로 값을 ture로 바꿈
  const showEditAfterClick = () => {
    setIsEdited(click => !click);
  };

  const changeTodoValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSwitchValue(e.target.value);
  };

  const enterEdit = () => {
    setInputArray(inputArray =>
      inputArray.map(todo =>
        todo.id === id ? { ...todo, inputValue: switchValue } : todo
      )
    );
  };

  return (
    //수정버튼

    <EditWrap>
      {/* {!isEdited && <EditBtn type="button"> ✎ </EditBtn>} */}
      {isEdited ? (
        <EditInputWrap>
          <EditInput onChange={changeTodoValue} />
          <button onClick={enterEdit}>ok</button>
        </EditInputWrap>
      ) : (
        ''
      )}
      <EditBtn type="button" onClick={showEditAfterClick}>
        ✎
      </EditBtn>
    </EditWrap>
  );
};

export default EditButton;

const EditWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EditInputWrap = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
`;

const EditInput = styled.input`
  width: 80%;
  @media screen and (max-width: 500px) {
    z-index: 3;
  }
`;

const EditBtn = styled.button`
  width: 35px;

  border: none;
  background-color: white;

  color: #d7d7d7;
  font-size: 24px;
  text-align: center;

  &:hover {
    color: black;
  }
`;
