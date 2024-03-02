
'use client'
import React, { useState, useReducer } from 'react';
import { lusitana } from '@/app/ui/fonts';

// Reducer functions
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'double':
      return { count: state.count + 2 };
    default:
      return state;
  }
};

// useReducer Component : 상태관리가, 여러개일때
// 여러 상태 계산 로직을 dispach ⇨ reducer하나의 경로로 줄임. 으로 생각하심 됨.
// 면접 질문이라면, "상태관리를 useReducer로 ⇨ dispach 통해 ⇨ reducer에게 시킴"요런 말을 넣어줘야 좋아할 듯..
const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 }); 

  const increment = () => {
    dispatch({ type: 'increment' });
  };
  const decrement = () => {
    dispatch({ type: 'decrement' });
  };
  const double = () => {
    dispatch({ type: 'double' });
  };


  return (
    <div>
      <h1 className={`${lusitana.className} text-2xl`}>2. useReducer</h1>
      <p>Count: {state.count}</p>
      <button className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={increment}>+</button>
      <button className="mt-4 rounded-md bg-pink-500 px-4 py-2 text-sm text-white transition-colors hover:bg-pink-400"
        onClick={decrement}>-</button>
      <button className="mt-4 rounded-md bg-green-500 px-4 py-2 text-sm text-white transition-colors hover:bg-green-400"
        onClick={double}>++</button>
    </div>
  );
};

// useState Component : 상태관리가, 하나 일때
const CounterWithState = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1 className={`${lusitana.className} text-2xl`}>1. useState</h1>
      <p>Count: {count}</p>
      <button className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={increment}>+</button>
    </div>
  );
};

export default function Page() {
  return (
    <>
      <p> Customers Page .</p>
      <p> 잠깐, 여기 페이지를 임시로 useReducer 설명을 위해  .</p>
      <ol className="list-decimal">
        <li>상태가 복잡, 다양, 여러개로 관리하고 싶을때</li>
        <li>걍 심플하게 useReducer와 useState는 똑같다?.생각하심 됩니다.</li>
        <br />
        <li>"useState"는 setState() 하나이지만.</li>
        <br />
        <li>"useReducer"는 - dispatch(여러개 옵션) - reducer(여러개 동작) 구조입니다.</li>
        <br />
        <li>"useReducer"는 dispatch함수에( 여러개 type 설정 가능, 예시 보세요.)  등으로 여러개.</li>
        
        <br/>
        <li>면접 질문이라면, "상태관리를 useReducer로 ⇨ dispach를 통해 (뭘?"액션"을)⇨ reducer에게 시킴"요런 말을 넣어주면 되지 않을까요?</li>
      </ol>

      <br />
      <CounterWithState />

      <br />
      <CounterWithReducer />
    </>
  )
}


//시간나면 요거도 설명..
//배열 계산 => 하나로 줄임.
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // 출력 결과는 15
// reduce는 영어로 '줄인다'라서, 
// 이것을 굳이 해석하면 배열을 하나의 출력으로 줄이고 있는 상황임. 그래서reduce임. 



