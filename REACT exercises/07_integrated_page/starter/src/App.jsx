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

export default function App() {
  return (
    <div className="container">
      <h1>請完成 ResultList，並把整個頁面組起來</h1>
      <SearchForm />
    </div>
  );
}
