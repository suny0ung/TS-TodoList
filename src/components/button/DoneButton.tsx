import styled from '@emotion/styled';
import { Dispatch, SetStateAction } from 'react';

interface DoneProps {
  isCheckBox: boolean;
  setIsCheckBox: Dispatch<SetStateAction<boolean>>;
}

function DoneButton({ isCheckBox, setIsCheckBox }: DoneProps) {
  const handleCheckedBox = () => {
    setIsCheckBox(completed => !completed);
  };

  return (
    <div>
      <DoneInputBox onClick={handleCheckedBox}>
        {isCheckBox && '✓'}
      </DoneInputBox>
    </div>
  );
}

export default DoneButton;

const DoneInputBox = styled.div`
  width: 23px;
  height: 20px;
  margin: 0 10px;
  padding: 3px 0 0 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #dee2e6;

  font-size: 20px;
  color: #06ad46;

  &:hover {
    border: 1px solid black;
  }
`;
