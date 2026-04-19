const sidebar = document.querySelector("#sidebar");

const toggleBtn = document.querySelector("#toggleBtn");

toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("d-none");
});