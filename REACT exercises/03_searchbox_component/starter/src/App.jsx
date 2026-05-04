function SearchBox() {
  return (
    <div>
      <input type="text" placeholder="請輸入關鍵字" />
      <button>搜尋</button>
    </div>
  );
}

function HeaderPair() {
  return (
    <>
      <h2>課程標題</h2>
      <p>這裡是副標說明</p>
    </>
  );
}

function Card() {
  return (
    <section>
      <h2 className="title">React Card</h2>
      <img src="cover.png" />
      <p>React 很好玩</p>
      <button>查看</button>;
    </section>
  );
}


export default function App() {
  return (
    <div className="container">
      <h1>搜尋功能</h1>
      <SearchBox />
      <HeaderPair />
      <Card />
    </div>
  );
}
