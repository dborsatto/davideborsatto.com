let content = document.getElementById('content');

document.getElementById('headshot').addEventListener('click', function(event) {
    content.classList.add('on-hover');

    setTimeout(function() {
        content.classList.remove('on-hover');
    }, 3000);
}, false);
