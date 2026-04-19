const hellobtn = document.querySelector("#hellobtn");
const message = document.querySelector("#message");

hellobtn.addEventListener("click", function () {
    message.textContent = "歡迎使用JavaScript";
});