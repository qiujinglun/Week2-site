/*
  Week 5 JavaScript 教學整合範例
  --------------------------------
  使用方式：
  1. 先讓學生只看最上面的 console.log，確認 JS 有成功連上。
  2. 再依教學順序，一段一段取消註解示範。
  3. 不需要一次全部打開，避免學生被太多概念淹沒。
*/

/* =========================
   Part 0：確認 JS 已載入
   ========================= */
console.log("Week 8 的 script.js 已成功載入");

/* =========================
   Part 1：變數、型別、條件判斷、函式
   這一段先不碰畫面，只用 console 示範
   ========================= */

const workshopName = "前端工作坊";
let seatsLeft = 20;
const isOpen = true;

console.log(workshopName);
console.log(seatsLeft);
console.log(isOpen);

const demoName = "";

if (demoName === "") {
  console.log("請輸入姓名");
} else {
  console.log("歡迎報名：" + demoName);
}

function getSignupMessage(name) {
  if (name === "") {
    return "請輸入姓名";
  }
  return "報名者：" + name;
}

console.log(getSignupMessage("Evan"));
console.log(getSignupMessage(""));

/* =========================
   Part 2：先抓到頁面元素（DOM 選取）
   從這裡開始，才正式碰到畫面
   ========================= */

const pageTitle = document.querySelector("#pageTitle");
const signupForm = document.querySelector("#signupForm");
const nameInput = document.querySelector("#nameInput");
const emailInput = document.querySelector("#emailInput");
const sessionSelect = document.querySelector("#sessionSelect");
const submitBtn = document.querySelector("#submitBtn");
const previewBtn = document.querySelector("#previewBtn");
const toggleGuideBtn = document.querySelector("#toggleGuideBtn");
const loadUserBtn = document.querySelector("#loadUserBtn");
const previewText = document.querySelector("#previewText");
const alertBox = document.querySelector("#alertBox");
const guideCard = document.querySelector("#guideCard");
const apiCard = document.querySelector("#apiCard");
const apiResult = document.querySelector("#apiResult");

console.log(pageTitle);
console.log(nameInput);
console.log(previewText);

/* =========================
   Part 3：修改文字與樣式
   可先講 textContent，再講 style / classList
   ========================= */

// pageTitle.textContent = "表單互動GO~!";
// pageTitle.style.color = "tomato";
// pageTitle.classList.add("highlight-title");

/* =========================
   Part 4：click 事件
   第一個最適合的新手事件
   ========================= */

previewBtn.addEventListener("click", function () {
  console.log("你按下了預覽按鈕");
});

previewBtn.addEventListener("click", function () {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const session = sessionSelect.value;

  previewText.textContent =
    `姓名：${name || "未填"} / Email：${email || "未填"} / 場次：${session || "未選"}`;
});

/* =========================
   Part 5：classList 切換顯示 / 隱藏
   用來示範 DOM 與 CSS 的連動
   ========================= */

toggleGuideBtn.addEventListener("click", function () {
  guideCard.classList.toggle("hidden-block");
});

/* =========================
   Part 6：input 事件
   邊輸入邊更新畫面
   ========================= */

function updatePreview() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const session = sessionSelect.value;

  previewText.textContent =
    `姓名：${name || "未填"} / Email：${email || "未填"} / 場次：${session || "未選"}`;
}

nameInput.addEventListener("input", updatePreview);
emailInput.addEventListener("input", updatePreview);
sessionSelect.addEventListener("input", updatePreview);

/* =========================
   Part 7：submit 與表單驗證
   最重要的概念：preventDefault()
   ========================= */

signupForm.addEventListener("submit", function (event) {
  // 阻止瀏覽器的預設行為（即：阻止頁面重新整理或跳轉），讓我們能用 JS 處理後續
  event.preventDefault();

  // 取得姓名輸入框的值，並用 .trim() 去除前後多餘的空白
  const name = nameInput.value.trim();
  // 取得 Email 輸入框的值，並去除前後空白
  const email = emailInput.value.trim();
  // 取得場次下拉選單目前選中的值
  const session = sessionSelect.value;

  // 先把提示框設回錯誤樣式，避免前一次成功狀態殘留
  // 初始化提示框狀態：先移除隱藏類別 (d-none) 與成功類別 (alert-success)
  alertBox.classList.remove("d-none", "alert-success");
  // 預設加上錯誤樣式 (alert-danger)，假設接下來可能會出錯
  alertBox.classList.add("alert-danger");

  // --- 開始驗證流程 ---


  // 如果姓名是空的
  if (name === "") {
    alertBox.textContent = "請輸入姓名"; // 設定提示文字
    alertBox.classList.remove("d-none"); // 確保提示框是顯示狀態
    return; // 結束函式，不執行後面的程式碼
  } ｓ

  // 如果 Email 是空的
  if (email === "") {
    alertBox.textContent = "請輸入 Email";
    alertBox.classList.remove("d-none");
    return; // 結束函式
  }

  // 這裡故意用最簡單的 includes("@")，方便第一週理解概念
  // 檢查 Email 字串裡是否包含 "@" 符號（基礎格式檢查）
  if (!email.includes("@")) {
    alertBox.textContent = "Email 格式不正確";
    alertBox.classList.remove("d-none");
    return; // 結束函式
  }

  // 如果場次選單沒有選值（value 為空）
  if (session === "") {
    alertBox.textContent = "請選擇場次";
    alertBox.classList.remove("d-none");
    return; // 結束函式
  }

  // --- 驗證通過後的處理 --
  // 移除錯誤樣式 (紅色)，換成成功樣式 (綠色)
  alertBox.classList.remove("alert-danger");
  alertBox.classList.add("alert-success");
  // 設定提示文字為報名成功
  alertBox.textContent = "報名成功";
  alertBox.classList.remove("d-none");

  // 在預覽區塊顯示使用者填寫的資訊
  previewText.textContent = `報名成功：${name} / ${email} / ${session}`;


  // 修改送出按鈕的文字為「已送出」
  submitBtn.textContent = "已送出";
  // 移除按鈕原本的藍色樣式 (btn-primary)，換成綠色樣式 (btn-success)
  submitBtn.classList.remove("btn-primary");
  submitBtn.classList.add("btn-success");

});

/* =========================
   Part 8：fetch 概念展示
   這段建議最後再講
   目標只是讓學生知道：前端也能從外部拿資料

   這段程式碼展示了前端開發中非常重要的 非同步請求 (Asynchronous Request)。
   它的作用是向遠端伺服器索取資料，並在不重新整理頁面的情況下更新畫面。
   ========================= */

// 為「讀取資料」按鈕綁定點擊事件監聽器   
loadUserBtn.addEventListener("click", function () {

  // 顯示原本隱藏的 API 結果卡片 (移除 d-none 類別)
  apiCard.classList.remove("d-none");
  // 在資料還沒抓到前，先在畫面上顯示「資料讀取中...」給使用者看（優化體驗）
  apiResult.textContent = "資料讀取中...";

  // 使用 fetch 發送網路請求，目標是一個公開的測試用 API 網址（獲取編號 1 的使用者）
  fetch("https://jsonplaceholder.typicode.co/")

    // 第一個 .then()：當伺服器回傳回應（response）時觸發
    .then(function (response) {
      // 將原始的回應內容轉換成 JavaScript 看得懂的 JSON 物件格式並回傳
      return response.json();
    })
    // 第二個 .then()：當 JSON 轉換完成後，拿到最終的資料 (data)
    .then(function (data) {
      // 將抓到的資料（姓名與 Email）組合起來，顯示在畫面上
      apiResult.textContent = `使用者：${data.name} / ${data.email}`;
    })
    // .catch()：如果中間發生錯誤（例如網路斷線或網址打錯）時觸發
    .catch(function () {
      // 在畫面上顯示錯誤訊息
      apiResult.textContent = "讀取失敗";
    });
});

/* =========================
   Part 9：可額外示範的補充
   若時間不夠，這段可以完全不講
   ========================= */

// 1. 若想在一開始先隱藏提示框，這裡可補充：
// alertBox.classList.add("d-none");

// 2. 若想重設送出按鈕狀態，也可另外示範：
// submitBtn.textContent = "送出報名";
// submitBtn.classList.remove("btn-success");
// submitBtn.classList.add("btn-primary");

/*
  老師講解建議順序：
  --------------------------------
  1. Part 0：先確認 JS 有連上
  2. Part 1：先用 console 講邏輯，不碰畫面
  3. Part 2 + 3：開始找元素、改文字
  4. Part 4：click 事件
  5. Part 5：切換 class，做顯示/隱藏
  6. Part 6：input 事件，做即時預覽
  7. Part 7：submit + 驗證
  8. Part 8：fetch 只是概念展示
*/
