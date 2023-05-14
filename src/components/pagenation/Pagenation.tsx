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

const Pagenation = ({
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
  console.log('총 페이지:', btnNumPage);

  //늘어나는 페이지의 값 (시작하는 페이지 값 + 1)
  const pageNumArray = [];
  for (let i = 1; i <= btnNumPage; i++) {
    pageNumArray.push(i);
  }
  console.log('배열에 페이지 번호 담기:', pageNumArray);

  //onclick handle 함수
  const onClickPageHandle = (index: number) => {
    setPageNum(index + 1);
  };

  //보여지는 페이지가 5가 넘어자면 자르기
  const sliceNum = pageNumArray.slice(offsetItem, offsetItem + limitItem);
  // console.log('페이지번호 5개씩 자르기', sliceNum);

  return (
    <div>
      {inputArray.length > 0 && (
        <PrevButton
          onClick={() => setPageNum(pageNum - 1)}
          disabled={pageNum === 1}
        >
          이전
        </PrevButton>
      )}
      {pageNumArray.map((num, index) => (
        <button key={num} onClick={() => onClickPageHandle(index)}>
          {num}
        </button>
      ))}
      {inputArray.length > 0 && (
        <NextButton
          onClick={() => setPageNum(btnNumPage)}
          disabled={pageNum === 1}
        >
          다음
        </NextButton>
      )}
    </div>
  );
};

export default Pagenation;

const PrevButton = styled.button``;

const NextButton = styled.button``;
