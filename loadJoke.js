document.addEventListener('DOMContentLoaded', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'jokes.txt', true);
    xhr.onload = function() {
        if (xhr.status == 200) {
            var jokes = xhr.responseText.split('\n');
            var randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
            document.getElementById('joke').textContent = randomJoke;
        }
    };
    xhr.send();
});
