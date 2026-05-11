const courses = [
  { id: 1, title: "React 入門", desc: "學習 JSX" },
  { id: 2, title: "React State", desc: "學習 useState" },
  { id: 3, title: "React Lists", desc: "學習 map 與 key" }
];

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
      <h1>練習 5：map + key</h1>
      {/* TODO: 用 map 顯示 3 張 ResultCard */}
    </div>
  );
}
