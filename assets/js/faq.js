document.querySelectorAll('.question').forEach((question) => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
        const answer = question.nextElementSibling;
        if (answer.classList.contains('open')) {
            answer.classList.remove('open');
        } else {
            answer.classList.add('open');
        }
    });
});