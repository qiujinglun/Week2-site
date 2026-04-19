console.log("Hello JavaScript!");
console.log(1 + 1);
console.log(true);

let tmp = true;

const workshopName = "JavaScript 基礎入門";
let seatsLeft = 20;
const username = " Eric ";

if (username === "") {
    console.log("請先輸入使用者名稱:");
}
else {
    console.log("歡迎回來，" + username);
}

seatsLeft--;
console.log("剩餘座位數: " + seatsLeft);


function getSignupMessage(name) {
    if (name === "") {
        return "請先輸入使用者名稱:";
    }
    return "報名者:" + name;
}



const pageTitle = document.querySelector("#pageTitle");

const message = document.querySelector("#message");

pageTitle.textContent = "我的活動報名頁";

message.textContent = "JavaScript 已經成功改變畫面"