function checkGrade() {
    let scoreInput = document.getElementById('scoreInput').value;
    let score = parseInt(scoreInput);
    
    if (isNaN(score) || score < 1 || score > 100) {
        alert("Please enter a valid score between 1 and 100.");
        return;
    }
    
    let grade;
    if (score >= 90 && score <= 100) {
        grade = "A";
    } else if (score > 100) {
        grade = "7 Crore ☠️";
    } else if (score >= 80 && score <= 89) {
        grade = "B";
    } else if (score >= 70 && score <= 79) {
        grade = "C";
    } else if (score >= 60 && score <= 69) {
        grade = "D";
    } else if (score >= 50 && score <= 59) {
        grade = "E";
    } else if (score >= 0 && score <= 49) {
        grade = "F";
    }
    
    document.getElementById('score').innerText = score;
    document.getElementById('grade').innerText = grade;
}