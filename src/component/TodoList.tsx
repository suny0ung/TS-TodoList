import styled from "@emotion/styled";
import TodoItem from "./TodoItem";
import {Todo} from "./interfacesTodo";

//아이템들 map으로 나열

  interface TodoListProps {
    inputArray: Todo[];
  }

  // type Props = {
  //   propsValue : Todo;
  // }
//함수선언문 vs 표현식의 차이점, 식 vs 문의 차이, 함수 선언문 vs 화살표 함수

//  const TodoList = ({inputArray}: Props) => {
  const TodoList = ({inputArray}:TodoListProps) => {
    
    return(
      <TodoItemBox>
        {inputArray.map((item)=>(
          <TodoItem key={item.id} id={item.id} value={item.inputValue}/>
        ))}
      </TodoItemBox>
    );
  };

export default TodoList;

const TodoItemBox = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid gray;
`;