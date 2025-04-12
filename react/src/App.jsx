import { useRef } from 'react';

export default function ColorBox() {

  // 여기에 필요한 훅과 함수 등을 직접 작성해보세요
  const changeRef = useRef(null);

  return (
    <>
      <button> 
        배경색 바꾸기
      </button>
      <div
        // 여기에 ref 연결
        ref={changeRef}
        style={{
          width: '200px',
          height: '100px',
          marginTop: '10px',
          backgroundColor: 'lightgray'
        }}
      >
        나는 박스입니다
      </div>
    </>
  );
}
