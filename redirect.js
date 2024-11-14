document.addEventListener('DOMContentLoaded', function() {
    let countdown = 10;
    const countdownElement = document.getElementById('countdown');
    const interval = setInterval(function() {
        countdown--;
        countdownElement.textContent = countdown;
        if (countdown === 0) {
            clearInterval(interval);
            window.location.href = 'index.html';
        }
    }, 1000);
});
