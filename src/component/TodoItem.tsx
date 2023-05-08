import styled from '@emotion/styled'
//input 내용 보여주기
type TodoItemProps = {
  id: string,
  value: string
}

function TodoItem({id, value}: TodoItemProps){
  return(
    <div key={id}>
      <p>{value}</p>
    </div>
  )
}

export default TodoItem;