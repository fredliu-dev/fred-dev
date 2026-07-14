document.addEventListener('DOMContentLoaded', function () {
    var collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach(function (collapsible) {
        var title = collapsible.querySelector('.collapsible-title');
        title.addEventListener('click', function () {
            collapsible.classList.toggle('open');
        });
    });
});