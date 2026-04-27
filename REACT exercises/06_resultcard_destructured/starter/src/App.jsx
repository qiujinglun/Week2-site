function ResultCard(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="container">
      <h1>請把 ResultCard 改成解構版</h1>
      <ResultCard title="React 基礎" desc="學習 component、JSX、props" />
    </div>
  );
}
