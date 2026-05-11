function ResultList({ results }) {
  // TODO: 如果 results 是空陣列，顯示「目前沒有結果」
  return (
    <div>
      {results.map((item) => (
        <div className="card" key={item.id}>
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const results = [];

  return (
    <div className="container">
      <h1>練習 6：empty state</h1>
      <ResultList results={results} />
    </div>
  );
}
