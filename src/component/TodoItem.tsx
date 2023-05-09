import styled from '@emotion/styled';
import RemoveButton from './RemoveButton';
import DoneButton from './doneButton';
//input 내용 보여주기
type TodoItemProps = {
  id: string,
  value: string
}

function TodoItem({id, value}: TodoItemProps){
  return(
    <ItemWrap key={id}>
      <DoneButton />
      <Item>{value}</Item>
      <RemoveButton id={id}/>
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
  background-color: yellow;
`;
