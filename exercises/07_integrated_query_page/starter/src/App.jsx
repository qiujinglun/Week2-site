import { useState } from "react";

const allCourses = [
  { id: 1, title: "React 入門", desc: "學習 component 與 JSX" },
  { id: 2, title: "React 狀態管理", desc: "學習 useState 與事件" },
  { id: 3, title: "JavaScript DOM", desc: "學習互動與事件處理" }
];

function ResultCard({ title, desc }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function ResultList({ results }) {
  // TODO: 加上 empty state
  return (
    <div>
      {results.map((item) => (
        <ResultCard key={item.id} title={item.title} desc={item.desc} />
      ))}
    </div>
  );
}

export default function App() {
  const [keyword, setKeyword] = useState("");
  // TODO: 補上 hasSearched、loading、error state

  const filteredCourses = allCourses.filter((course) =>
    course.title.toLowerCase().includes(keyword.trim().toLowerCase())
  );

  function handleSearch() {
    // TODO: 空白檢查、loading、hasSearched
  }

  return (
    <div className="container">
      <h1>練習 7：整合查詢頁</h1>
      <div className="search-row">
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="請輸入關鍵字"
        />
        <button onClick={handleSearch}>搜尋</button>
      </div>

      {/* TODO: 顯示 error、loading、初始提示、結果列表 */}
    </div>
  );
}
