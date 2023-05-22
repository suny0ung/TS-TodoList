import styled from '@emotion/styled';
import { Dispatch, SetStateAction, useState } from 'react';
// import PageButtons from './PageButtons';
import { Todo } from '../../types/interfacesTodo';

type props = {
  inputArray: Todo[];
  pageNum: number;
  setPageNum: Dispatch<SetStateAction<number>>;
  limitItem: number;
  offsetItem: number;
};

const Pagination = ({
  inputArray,
  pageNum,
  setPageNum,
  limitItem,
  offsetItem,
}: props) => {
  //페이지의 아이템 갯수 => 댓글이 담긴 배열 - inputArray

  //총 페이지 숫자-> 페이지의 아이템의 값이 5의 배수가 아니더라도, 5의 배수로 채워져야됨.
  //Math.ceil는 소수값이 존재할 때 값을 올리는 역할을 하는함수
  const btnNumPage = Math.ceil(inputArray?.length / limitItem);
  // console.log('총 페이지:', btnNumPage);

  //늘어나는 페이지의 값 (시작하는 페이지 값 + 1)
  const pageNumArray = [];
  for (let i = 1; i <= btnNumPage; i++) {
    pageNumArray.push(i);
  }
  // console.log('배열에 페이지 번호 담기:', pageNumArray);

  //onclick handle 함수
  const onClickPageHandle = (index: number) => {
    setPageNum(index + 1);
    console.log('클릭한 버튼의 번호 -->', index, (pageNum - 1) % 5);
  };

  const slicePageNum = pageNum - 1;
  console.log('pageNum -->', pageNum);

  // const startSliceNumber = Math.floor(pageNum / limitItem);
  const startSliceNumber = Math.floor(slicePageNum / limitItem);

  const endSliceNumber = startSliceNumber + 5;

  //보여지는 페이지가 5가 넘어자면 자르기
  // const sliceNum = pageNumArray.slice(offsetItem, offsetItem + limitItem);
  // console.log('페이지번호 5개씩 자르기', sliceNum);
  const sliceArray = pageNumArray.slice(startSliceNumber, endSliceNumber);
  console.log('잘리는 페이지 번호', sliceArray);

  return (
    <PaginationButtonWrap>
      {pageNumArray.length > 1 ? (
        <PrevButton
          onClick={() => setPageNum(pageNum - 1)}
          disabled={pageNum === 1}
        >
          〈
        </PrevButton>
      ) : (
        ''
      )}
      {sliceArray.map((num, index) => (
        <NumberButton
          key={num}
          onClick={() => onClickPageHandle(index)}
          colorStyle={index === (pageNum - 1) % 5}
        >
          {num}
        </NumberButton>
      ))}
      {inputArray.length > 0 && (
        <NextButton
          onClick={() => setPageNum(pageNum + 1)}
          disabled={pageNum === 0}
        >
          〉
        </NextButton>
      )}
    </PaginationButtonWrap>
  );
};

export default Pagination;

const PaginationButtonWrap = styled.div`
  width: 100%;
  padding: 30px 0;
  display: flex;
  justify-content: center;
`;

const NumberButton = styled.button<{ colorStyle: boolean }>`
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 50%;
  margin: 0 3px;
  color: ${props => (props.colorStyle ? 'white' : '#858585')};
  background-color: ${props => (props.colorStyle ? '#b1d7fc' : 'white')};
`;

const PrevButton = styled.button`
  margin: 0 3px;
  border: none;
  font-weight: 800;
  background-color: white;
`;

const NextButton = styled.button`
  margin: 0 3px;
  border: none;
  font-weight: 800;

  background-color: white;
`;
