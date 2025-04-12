import { useEffect } from 'react';

export default function Welcome() {
  // TODO: 컴포넌트가 처음 렌더링될 때 콘솔에 "환영합니다!" 출력
  useEffect(() => { 
  // useEffect는 뒤에 의존성을 제한 할 수 있는데 빈 의존성 배열을 넣을 경우 첫 랜더링 시에만 아래 코드가 실행됨.
    console.log("환영합니다!");
  }, []);

  return <h1>Welcome Page</h1>;
}