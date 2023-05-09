import styled from '@emotion/styled'

interface DoneProps {
  completed?: boolean,
  onClick?():void
}

function DoneButton ({ onClick, completed}:DoneProps){



  return(
    <div>
      <DoneInputBox onClick={onClick}>
        {   completed && "✓"}

      </DoneInputBox>
    </div>
  )
}

export default DoneButton;

const DoneInputBox = styled.div`
  width: 20px;
  height: 20px;

  margin: 0 10px;

  border: 1px solid #dee2e6;
  
  color: #06AD46;

  &:hover{
    border: 1px solid black;
  }
`;

