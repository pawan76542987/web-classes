const category = localStorage.getItem("category");
const difficulty = localStorage.getItem("difficulty");

const api_key = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`;

const start_btn = document.getElementById("start");

let questions;
let currentIndex = 0;
let score = 0;
let answered = false;
let timer;
let timeLeft = 10;

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

fetch(api_key)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        questions = data.results;

        showQuestion();

    })
    .catch(error => console.error('Error: ', error));

function showQuestion() {
    answered = false;
    document.getElementById("message").innerHTML = "Choose an option";

    const question = document.getElementById("question");
    question.innerHTML = questions[currentIndex].question;

    document.getElementById("ques-completed").innerHTML =
        `Question ${currentIndex + 1} / ${questions.length}`;

    const currentQues = questions[currentIndex];
    clearInterval(timer);
    questionTime(currentQues);

    let options = [...currentQues.incorrect_answers, currentQues.correct_answer];
    options.sort(() => Math.random() - 0.5);

    const optionButtons = document.querySelectorAll(".option");
    optionButtons.forEach((btn, index) => {
        btn.innerHTML = options[index];

        btn.style.backgroundColor = "";
        btn.disabled = false;

        btn.onclick = () => {
            answered = true;

            clearInterval(timer);

            if (btn.innerHTML == currentQues.correct_answer) {
                btn.style.backgroundColor = "green";
                score++;
            }
            else {
                btn.style.backgroundColor = "red";
            }
            optionButtons.forEach(b => {
                if (b.innerHTML === currentQues.correct_answer) {
                    b.style.backgroundColor = "green";
                }
            });
            optionButtons.forEach(b => b.disabled = true);
        }
        document.getElementById("next-btn").disabled = false;
    });
}

document.getElementById("next-btn").addEventListener("click", (e) => {

    if (!answered) {
        document.getElementById("message").innerHTML = "Please choose an option";
        return;
    }
    currentIndex++;
    // if (currentIndex < questions.length)
    //     showQuestion();

    if (currentIndex === questions.length) {
        showResult();
    } else {
        showQuestion();
    }
});

function questionTime(currentQues) {
    timeLeft = 10;
    document.getElementById("timer").innerHTML = `Time : ${timeLeft} s`;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerHTML = `Time : ${timeLeft} s`;

        if (timeLeft === 0) {
            clearInterval(timer);
            answered = true;

            const optionButtons = document.querySelectorAll(".option");
            optionButtons.forEach(btn => {
                btn.disabled = true;

                if (btn.innerHTML === currentQues.correct_answer) {
                    btn.style.backgroundColor = "green";
                }
            });
            document.getElementById("message").innerHTML = "Time's up!";
        }
    }, 1000);
}

function showResult() {
    clearInterval(timer);

    document.getElementById("quiz-heading").style.display = "none";

    document.getElementById("ques-completed").innerHTML = "";

    document.getElementById("timer").innerHTML = "";

    document.getElementById("question").innerHTML = "🎉 Quiz Completed!";

    document.getElementById("message").innerHTML =
        `Your Score: ${score} / ${questions.length}`;

    const optionButtons = document.querySelectorAll(".option");
    optionButtons.forEach(btn => btn.style.display = "none");

    document.getElementById("next-btn").style.display = "none";
}