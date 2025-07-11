const getAverage = (numbers: number[]) => {
  console.log("평균 값을 계산 중입니다.");

  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((acc, cur) => acc + cur);
  return sum / numbers.length;
};

// useMemo 훅(Hook)을 사용하면 작업을 최적화 할 수 있습니다.
// 렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고, 원하는 값이 바뀌지 않는다면
// 이전에 연산했던 결과를 다시 사용하는 방식입니다.

function Average() {
  return <div>Average</div>;
}

export default Average;
