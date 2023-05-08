import styled from '@emotion/styled'

function DoneButton (){
  return(
    <div>
      <DoneBtn></DoneBtn>

      {/* <DoneBtn>{ && <p>✓</p>}</DoneBtn> */}
    </div>
  )
}

export default DoneButton;

const DoneBtn = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 10px;
  border: 1px solid #dee2e6;
`;