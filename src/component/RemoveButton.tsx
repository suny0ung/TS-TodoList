import styled from '@emotion/styled'

function RemoveButton (){
  return(
    <div>
      <RemoveBtn>✕</RemoveBtn>
    </div>
  )
}

export default RemoveButton;

const RemoveBtn = styled.div`
    width: 20px;
    height: 30px;
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