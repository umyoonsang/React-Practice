import { useState, useEffect } from "react";

function Effect() {
  //useEffect
  //useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook 입니다.
  const [name, setName] = useState<string>("");
  const [name, setNickname] = useState<string>("");

  return (
    <div>
      <input type="text" value={name} onChange={onchangeName} />
      <input type="text" />
    </div>
  );
}

export default Effect;
