import { useState } from "react";

export default function App() {
  // TODO: 建立 name state，初始值是 "同學"
  const [name, setName] = useState("同學");

  return (
    <div className="container">
      <h1>練習 1：name state</h1>
      <p>你好，{name}</p>
    </div>
  );
}
