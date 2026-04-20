document.getElementById("syncBtn").addEventListener("click", () => {
    const output = document.getElementById("syncOutput");
    const lines = [];

    // TODO 1：依序加入三行文字
    lines.push("1. 開始");
    lines.push("2. 做事情");
    lines.push("3. 結束");

    // TODO 2：顯示到畫面
    output.innerHTML = lines.join("<br>");
});

function getDataWithCallback(callback) {
    setTimeout(() => {
        const data = "這是 2 秒後拿到的資料";
        // TODO 1：呼叫 callback，把 data 傳出去
        callback(data);
    }, 2000);
}

document.getElementById("callbackBtn").addEventListener("click", () => {
    const output = document.getElementById("callbackOutput");
    output.innerHTML = "1. 開始請求資料<br>2. 等待中...";

    // TODO 2：呼叫 getDataWithCallback
    getDataWithCallback((result) => {
        output.innerHTML += `<br>資料回來了：${result}`;
    });
    // 並在 callback 中把「資料回來了：...」加到畫面上
});


function getDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if (success) {
                // TODO 1：成功時回傳資料
                resolve("資料資料成功回來了！");
            } else {
                // TODO 2：失敗時回傳錯誤
                reject("資料回傳失敗了...");
            }
        }, 2000);
    });
}

document.getElementById("promiseBtn").addEventListener("click", () => {
    const output = document.getElementById("promiseOutput");
    output.textContent = "開始執行 Promise，請稍候 2 秒...";

    // TODO 3：用 .then() 顯示成功訊息
    // TODO 4：用 .catch() 顯示失敗訊息

    getDataWithPromise()
        .then((result) => {
            output.textContent = `成功：${result}`;
        })
        .catch((error) => {
            output.textContent = `失敗：${error}`;
        });
});



document.getElementById("weatherBtn").addEventListener("click", () => {
    const output = document.getElementById("weatherOutput");
    const url = "https://api.open-meteo.com/v1/forecast?latitude=25.05&longitude=121.52&current=temperature_2m";

    output.textContent = "查詢中...";

    // TODO 1：使用 fetch(url)
    // TODO 2：第一層 then 拿到 response，並回傳 response.json()
    // TODO 3：第二層 then 拿到 data，取出 data.current.temperature_2m
    // TODO 4：把溫度顯示在 output
    // TODO 5：加上 catch，顯示「查詢失敗」
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const temp = data.current.temperature_2m;
            output.textContent = `目前溫度：${temp}°C`;
        })
        .catch(() => {
            output.textContent = "查詢失敗";
        });
});