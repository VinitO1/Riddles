window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('revealButton').addEventListener('click', function () {
        var answerElement = document.getElementById('answer');
        if (answerElement.style.display === 'none') {
            answerElement.style.display = 'block';
            this.textContent = 'Next riddle';
        } else {
            window.location.href = '/';
        }
    });
});