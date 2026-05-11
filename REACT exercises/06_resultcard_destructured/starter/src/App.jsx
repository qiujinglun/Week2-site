// function ResultCard(props) {
//   return (
//     <div className="card">
//       <h3>{props.title}</h3>
//       <p>{props.desc}</p>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div className="container">
//       <h1>請把 ResultCard 改成解構版</h1>
//       <ResultCard title="React 基礎" desc="學習 component、JSX、props" />
//     </div>
//   );
// }

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
      <h1>課程查詢工具</h1>
      <SearchForm />
      <ResultList />
    </div>
  );
}
