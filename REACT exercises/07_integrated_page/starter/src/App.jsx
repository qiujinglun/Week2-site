function SearchForm() {
  return (
    <div className="search-box">
      <input type="text" placeholder="請輸入關鍵字" />
      <button>搜尋</button>
    </div>
  );
}

function ResultCard({ title, desc }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
function ResultList() {
  return (
    <div>
      <ResultCard title="React 課程" desc="認識元件化網頁前端" />
      <ResultCard title="網站建置管理" desc="了解網頁前後端相關知識" />
    </div>
  );
}

export default function App() {
  return (
    <div className="container">
      <h1>請完成 ResultList，並把整個頁面組起來</h1>
      <SearchForm />
      <ResultList />
    </div>
  );
}
