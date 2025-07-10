import { useState } from "react";

function App() {
  //useState => Hooks
  //useState는 가장 기본적인 Hook이며, 함수 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해준다.
  //=> 이 함수가 호출되면 배열을 반환한다. => 첫번째 요소는 상태 값, 두번째 요소는 상태를 설정하는 함수
  //useState 함수의 파라미터에는 상태의 기본값을 넣어 줍니다.
  const [value, setValue] = useState(0);
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onChangeNickname = (event) => {
    setNickname(event.target.value);
  };

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>
      </p>
      <button onClick={() => setValue(value + 1)}>1 증가</button>
      <button onClick={() => setValue(value - 1)}>1 감소</button>

      <div>
        <input type="text" value={name} onChange={onChangeName} />
        <input type="text" value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <b>이름:</b>
        {name}
      </div>
    </div>
  );
}

export default App;
