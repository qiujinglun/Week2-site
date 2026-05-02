document.getElementById("btn").addEventListener("click", exchangerate);

async function exchangerate() {
    const ex1 = document.getElementById("er1").value;
    const ex2 = document.getElementById("er2").value;
    const amount = Number(document.getElementById("input").value);
    const result = document.getElementById("output");

    if (isNaN(amount) || amount <= 0) {
        result.textContent = "請輸入正確金額";
        return;
    }

    result.textContent = "Loading...";


    await new Promise(resolve => setTimeout(resolve, 300));

    try {

        const url = `https://api.frankfurter.dev/v2/rate/${ex1}/${ex2}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();


        const rate = data.rate;
        const date = data.date;


        result.textContent = `${amount} ${ex1} = ${amount * rate} ${ex2}`;
        document.getElementById("nowdate").textContent = `匯率日期: ${date}`;

    } catch (error) {
        result.textContent = "取得匯率失敗";
        console.error(error);
    }
}

document.getElementById("change").addEventListener("click", change);

function change() {
    const ex1 = document.getElementById("er1");
    const ex2 = document.getElementById("er2");

    const temp = ex1.value;
    ex1.value = ex2.value;
    ex2.value = temp;

    exchangerate();

}


