function ResultCard(props) {
  return (
    <div className="card">
      <h3>請改成 props.title</h3>
      <p>請改成 props.desc</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="container">
      <h1>請完成兩張 ResultCard</h1>
      <ResultCard />
    </div>
  );
}
