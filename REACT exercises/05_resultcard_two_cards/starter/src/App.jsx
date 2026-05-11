function ResultCard(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
}
function ResultCard2({ title, rating, desc, isSale, tags }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>評分：{rating}</p>
      <p>{desc}</p>
      {isSale && <span>特價中</span>}
      <p>標籤：{tags.join("、")}</p>
    </div>
  );
}


export default function App() {
  return (
    <div className="container">
      <h1>請完成兩張 ResultCard</h1>
      <ResultCard title="React 基礎" desc="學習 component、JSX、props" />
      <ResultCard title="React 進階" desc="學習 state、event、hook" />
      <ResultCard2 title="React 基礎" rating={5} desc="學習 component、JSX、props" isSale={true} tags={["前端", "JavaScript", "元件化"]} />
      <ResultCard2 title="網站教學" rating={4} desc="學習前端開發基礎" isSale={false} tags={["前端", "後端", "API"]} />
    </div>
  );
}

//APP
// --Title
// --SearchForm
// ----SearchInput
// --ResultList
// ----ResultCard
// ------CardTitle
// ------CardDesc
// ------CardTags
// ----ResultCard2
// ------CardTitle
// ------CardRating
// ------CardDesc
// ------CardSale
// ------CardTags