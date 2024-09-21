// JavaScript to toggle visibility of answers
document.addEventListener('DOMContentLoaded', function() {
    let questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        question.addEventListener('click', function() {
            let answer = this.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });
});
