export default function App() {
  const list = [];

  return (
    <div className="container">
      <h1>練習 4：修正 0 陷阱</h1>
      {/* TODO: 修正這一行，避免畫面出現 0 */}
      {list.length && <p>有資料</p>}
    </div>
  );
}
