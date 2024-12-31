document.getElementById("submit-btn").addEventListener("click", function () {
    // 正確答案
    const correctAnswers = {
        q1: "F",
        q2: "T",
        q11: "A",
        q12: "B",
    };

    // 分數計算
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;

    // 獲取用戶的答案
    const form = document.getElementById("quiz-form");
    const userAnswers = new FormData(form);

    for (let [question, correctAnswer] of Object.entries(correctAnswers)) {
        if (userAnswers.get(question) === correctAnswer) {
            score++;
        }
    }

    // 顯示分數
    document.getElementById("score").textContent = `${score} / ${totalQuestions}`;
    document.getElementById("score-section").classList.remove("d-none");
});
