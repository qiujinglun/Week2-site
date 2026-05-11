import { useState } from "react";

export default function App() {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="container">
      <h1>練習 2：受控輸入框</h1>
      {/* TODO: 完成 input 的 value 與 onChange */}
      {/* <input placeholder="請輸入關鍵字" />
      <p>你正在搜尋：</p> */}
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="請輸入關鍵字"
      />
      <p>目前關鍵字：{keyword}</p>
    </div>
  );
}
