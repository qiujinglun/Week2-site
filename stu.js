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
            output.textContent = `目前台北溫度：${temp}°C`;
        })
        .catch(() => {
            output.textContent = "查詢失敗";
        });
});


async function getWeatherAsync() {
    const output = document.getElementById("weatherOutput2");
    const url = "https://api.open-meteo.com/v1/forecast?latitude=25.05&longitude=121.52&current=temperature_2m";

    output.textContent = "查詢中...";

    try {
        // TODO 1：await fetch(url)
        const response = await fetch(url);

        // TODO 2：await response.json()
        const data = await response.json();

        // TODO 3：取出溫度
        const temp = data.current.temperature_2m;

        // TODO 4：顯示到畫面
        output.textContent = `台北目前溫度：${temp}°C`;
    } catch (error) {
        output.textContent = "查詢失敗，請稍後再試";
        console.error(error);
    }
}

document.getElementById("weatherBtn2").addEventListener("click", getWeatherAsync);

//part 6
async function getWeatherSafe() {
    const output = document.getElementById("weatherOutput3");
    output.textContent = "查詢中...";

    try {
        const url = "https://api.open-meteo.com/v1/forecast?latitude=25.05&amp;longitude=121.52&amp;current=temperature_2m";

        // TODO 1：fetch
        const response = await fetch(url);
        // TODO 2：如果 !response.ok，就 throw new Error(...)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // TODO 3：json 解析
        const data = await response.json();
        // TODO 4：如果資料格式不正確，也要 throw new Error(...)
        if (!data.current || typeof data.current.temperature_2m !== "number") {
            throw new Error("資料格式不正確");
        }
        // TODO 5：成功時顯示氣溫
        const temp = data.current.temperature_2m;
        output.textContent = `台北目前溫度：${temp}°C`;
    } catch (error) {
        // TODO 6：失敗時顯示「查詢失敗，請稍後再試」
        output.textContent = "查詢失敗，請稍後再試";
        console.error(error);
    }
}

//part 7
document.getElementById("weatherBtn3").addEventListener("click", getWeatherSafe);

async function fetchWeatherByCity() {
    const cityValue = document.getElementById("citySelect").value;
    const result = document.getElementById("finalResult");

    // TODO 1：把 "25.05,121.52" 拆成 lat / lon
    // const [lat, lon] = cityValue.split(",");
    const [lat, lon] = cityValue.split(",").map(Number);


    result.textContent = "查詢中...";

    try {
        // TODO 2：組出 API URL
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`;
        // TODO 3：fetch
        const response = await fetch(url);
        // TODO 4：檢查 response.ok
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // TODO 5：json 解析
        const data = await response.json();
        // TODO 6：取出 temperature_2m
        const temp = data.current.temperature_2m;
        // TODO 7：顯示「目前氣溫：XX°C」
        result.textContent = `目前氣溫：${temp}°C`;
    } catch (error) {
        // TODO 8：失敗時顯示「查詢失敗，請稍後再試」
        result.textContent = "查詢失敗，請稍後再試";
        console.error(error);
    }
}

document.getElementById("searchBtn").addEventListener("click", fetchWeatherByCity);



