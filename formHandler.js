document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'survey_process_lb7.php', true);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);

            if (response.success) {
                window.location.href = 'survey_result.html?name=' + encodeURIComponent(response.name) +
                                       '&timestamp=' + encodeURIComponent(response.timestamp);
            } else {
                document.getElementById('responseMessage').innerHTML = '<p>Сталася помилка при відправці форми. Спробуйте ще раз.</p>';
            }
        }
    };

    xhr.send(formData);
});
