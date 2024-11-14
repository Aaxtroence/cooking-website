document.addEventListener('DOMContentLoaded', function() {
    const resultsBody = document.getElementById('resultsBody');

    fetch('json.php')
        .then(response => response.json()) 
        .then(data => {
            if (data.length === 0) {
                resultsBody.innerHTML = '<tr><td colspan="7">Немає даних для відображення.</td></tr>';
                return;
            }

            data.forEach((response, index) => {
                const row = document.createElement('tr');
                
                let cell = document.createElement('td');
                cell.textContent = index + 1;
                row.appendChild(cell);

                cell = document.createElement('td');
                cell.textContent = response.name;
                row.appendChild(cell);

                cell = document.createElement('td');
                cell.textContent = response.email;
                row.appendChild(cell);

                cell = document.createElement('td');
                cell.textContent = response.question1;
                row.appendChild(cell);

                cell = document.createElement('td');
                cell.textContent = response.question2;
                row.appendChild(cell);

                cell = document.createElement('td');
                cell.textContent = response.question3;
                row.appendChild(cell);

                cell = document.createElement('td');
                cell.textContent = response.timestamp;
                row.appendChild(cell);

                resultsBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            resultsBody.innerHTML = '<tr><td colspan="7">Не вдалося завантажити дані.</td></tr>';
        });
});
