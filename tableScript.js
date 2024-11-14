$(document).ready(function() {
    function fetchData() {
        $.ajax({
            url: 'http://lab.vntu.org/api-server/lab7.php',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                var tableBody = $('#data-table tbody');
                tableBody.empty();

                data.forEach(function(item) {
                    tableBody.append(
                        '<tr><td>' + item.name + '</td><td>' + item.affiliation + '</td></tr>'
                    );
                });
            },
            error: function() {
                alert('Не вдалося завантажити дані.');
            }
        });
    }
    fetchData();

    $('#refreshButton').click(function() {
        fetchData();
    });

    $('#name-header').click(function() {
        var rows = $('#data-table tbody tr').get();
        rows.sort(function(a, b) {
            var nameA = $(a).find('td').eq(0).text().toLowerCase();
            var nameB = $(b).find('td').eq(0).text().toLowerCase();
            return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
        });

        $.each(rows, function(index, row) {
            $('#data-table tbody').append(row);
        });
    });

    $('#affiliation-header').click(function() {
        var rows = $('#data-table tbody tr').get();
        rows.sort(function(a, b) {
            var affiliationA = $(a).find('td').eq(1).text().toLowerCase();
            var affiliationB = $(b).find('td').eq(1).text().toLowerCase();
            return affiliationA < affiliationB ? -1 : affiliationA > affiliationB ? 1 : 0;
        });

        $.each(rows, function(index, row) {
            $('#data-table tbody').append(row);
        });
    });
});
