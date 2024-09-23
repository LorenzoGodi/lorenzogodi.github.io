document.getElementById('enBtn').addEventListener('click', function() {
    switchLanguage('en');
});

document.getElementById('itBtn').addEventListener('click', function() {
    switchLanguage('it');
});

function switchLanguage(lang) {
    let elements = document.querySelectorAll('[data-lang]');
    elements.forEach(function(el) {
        if (el.getAttribute('data-lang') === lang) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    });

    document.getElementById('enBtn').classList.toggle('active', lang === 'en');
    document.getElementById('itBtn').classList.toggle('active', lang === 'it');
}

// Initial setup: Display English by default
switchLanguage('en');
