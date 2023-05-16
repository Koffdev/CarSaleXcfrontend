$(document).ready(function() {
    $.get('/menu/', function(data) {
        ('.menu').html(data);
    });
});
