const quiz = [
    { q: "What does PBL focus on?", options: ["Products", "Performance", "Transport", "Storage"], answer: "Performance" },
    { q: "PBL improves?", options: ["Cost only", "Reliability", "Nothing", "Delay"], answer: "Reliability" },
    { q: "PBL is based on?", options: ["Outcome", "Items", "Speed", "None"], answer: "Outcome" },
    { q: "PBL encourages?", options: ["Short-term deals", "Partnerships", "Delay", "Loss"], answer: "Partnerships" },
    { q: "PBL reduces?", options: ["Efficiency", "Cost", "Quality", "Performance"], answer: "Cost" },
    { q: "Where is PBL used?", options: ["Defense", "School", "Bank", "Retail"], answer: "Defense" },
    { q: "PBL focuses on?", options: ["Input", "Output", "Outcome", "Process"], answer: "Outcome" },
    { q: "Main benefit?", options: ["Delay", "Reliability", "Waste", "Confusion"], answer: "Reliability" },
    { q: "PBL improves?", options: ["System performance", "Failure", "Errors", "Loss"], answer: "System performance" },
    { q: "Goal of PBL?", options: ["Deliver items", "Achieve results", "Increase cost", "Reduce quality"], answer: "Achieve results" }
];

let index = 0;
let score = 0;
let answered = false;

function loadQuestion() {
    answered = false;
    document.getElementById("result").innerText = "";

    const current = quiz[index];
    document.getElementById("question").innerText = current.q;

    let optionsHTML = "";
    current.options.forEach(opt => {
        optionsHTML += `<button onclick="checkAnswer(this, '${opt}')">${opt}</button>`;
    });

    document.getElementById("options").innerHTML = optionsHTML;
}

function checkAnswer(button, selected) {
    if (answered) return;

    const correct = quiz[index].answer;
    const buttons = document.querySelectorAll("#options button");

    buttons.forEach(btn => {
        if (btn.innerText === correct) {
            btn.classList.add("correct");
        } else {
            btn.classList.add("wrong");
        }
        btn.disabled = true;
    });

    if (selected === correct) {
        score++;
        document.getElementById("result").innerText = "Correct!";
    } else {
        document.getElementById("result").innerText = "Wrong!";
    }

    answered = true;
}

function nextQuestion() {
    index++;

    if (index < quiz.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-card").innerHTML =
            `<h2>Quiz Completed </h2>
             <h3>Your Score: ${score}/10</h3>`;
    }
}

loadQuestion();                 