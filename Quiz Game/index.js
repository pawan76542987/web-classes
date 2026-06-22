const startBtn = document.getElementById("start");

startBtn.addEventListener("click", () => {
    const category = document.getElementById("category").value;
    const difficulty = document.getElementById("difficulty").value;

    if (!category || !difficulty) {
        document.getElementById("message-1").innerHTML = "Please choose category and difficulty!"
        return;
    }
    localStorage.setItem("category", category);
    localStorage.setItem("difficulty", difficulty);

    window.location.href = "quiz.html";
});

const themeBtn = document.getElementById("light-dark");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeBtn.innerHTML = "☀️";
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeBtn.innerHTML = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeBtn.innerHTML = "🌙";
    }
});