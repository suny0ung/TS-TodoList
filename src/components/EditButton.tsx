import { Dispatch, SetStateAction, useState } from 'react';
import styled from '@emotion/styled';
import { Todo } from '../types/interfacesTodo';

type Props = {
  id: string;
  inputValue: string;
  setInputArray: Dispatch<SetStateAction<Todo[]>>;
  isCheckBox: boolean;
};

const EditButton = ({ id, inputValue, setInputArray, isCheckBox }: Props) => {
  //수정버튼을 클릭했을때 수정모드를 확인하는 useState
  const [isEdited, setIsEdited] = useState(false);
  const [switchValue, setSwitchValue] = useState(inputValue);

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
    setIsEdited(false);
  };

  return (
    //수정버튼
    <EditWrap>
      <EditInputWrap>
        {!isCheckBox ? (
          isEdited ? (
            <EditInput value={switchValue} onChange={changeTodoValue} />
          ) : (
            <Item>{inputValue}</Item>
          )
        ) : (
          <DoneItem>{inputValue}</DoneItem>
        )}
      </EditInputWrap>

      {!isEdited ? (
        <EditBtn type="button" onClick={showEditAfterClick}>
          ✎
        </EditBtn>
      ) : (
        <OkButton onClick={enterEdit}>ok</OkButton>
      )}
    </EditWrap>
  );
};

export default EditButton;

const EditWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Item = styled.p`
  width: 100%;
`;

const DoneItem = styled.p`
  width: 90%;
  color: #c5c8ca;
  text-decoration: line-through;
`;

const EditInputWrap = styled.div`
  width: 80vw;
  max-width: 1024px;
`;

const EditInput = styled.input`
  width: 79vw;
  margin: 20px 0;
  @media screen and (max-width: 500px) {
    z-index: 3;
  }
`;

const OkButton = styled.button`
  height: fit-content;
  margin: 20px 0;
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
