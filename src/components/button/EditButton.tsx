import { Dispatch, SetStateAction, useState } from 'react';
import styled from '@emotion/styled';
import { Todo } from '../../types/interfacesTodo';

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

  // console.log('inputValue 1-', inputValue);

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
  // console.log('inputValue 2-', inputValue);

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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Item = styled.p`
  // min-width: 900px;
  // max-width: 400px;
  /* @media screen and (max-width: 700px) {
    width: 400px;
  } */
`;

const DoneItem = styled.p`
  /* width: 90%; */
  color: #c5c8ca;
  text-decoration: line-through;
`;

const EditInputWrap = styled.div`
  width: 100%;
  /* min-width: 360px;
  max-width: 1000px; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
`;

const EditInput = styled.input`
  /* width: 79vw; */
  width: 100%;
  /* min-width: 360px;
  max-width: 1000px; */
  height: 25px;
  margin: 15px 0;
  padding: 0;
  @media screen and (max-width: 700px) {
    z-index: 3;
  }
`;

const OkButton = styled.button`
  width: 40px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: #c9c9c9;
  color: white;
  &:hover {
    background-color: gray;
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
