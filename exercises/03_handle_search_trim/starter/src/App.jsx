import { useState } from "react";

export default function App() {
  const [keyword, setKeyword] = useState("");
  const [message, setMessage] = useState("尚未搜尋");

  function handleSearch() {
    // TODO: 空白時顯示「請先輸入關鍵字」
    // TODO: 有內容時顯示「正在搜尋 XXX」
  }

  return (
    <div className="container">
      <h1>練習 3：handleSearch</h1>
      <div className="search-row">
        <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        <button onClick={handleSearch}>搜尋</button>
      </div>
      <p>{message}</p>
    </div>
  );
}
