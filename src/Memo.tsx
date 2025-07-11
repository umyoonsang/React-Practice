import { useState } from "react";

const getAverage = (numbers: number[]) => {
  console.log("평균 값을 계산 중입니다.");

  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((acc, cur) => acc + cur);
  return sum / numbers.length;
};

function Memo() {
  // useMemo
  // useMemo를 사용하면 함수 컴포넌트 내부에서 발생하는 연산을 최적화 할 수 있습니다.
  // 먼저, 리스트에 숫자를 추가하면 추가된 숫자들의 평균을 보여 주는 함수 컴포넌트를 작성해 봅시다.

  const [list, setList] = useState();
  const [number, setNumber] = useState<string>("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
    
  };

  const onInsert = (event) => {
    const nextList = list.concat.(parseInt(number));
    setList(nextList);
    setNumber("");
  }

  return (
    <div>
      <input type="text" value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
    </div>
  );
}

export default Memo;
