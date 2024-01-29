document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('projLink').addEventListener('click', function(e) {
        e.preventDefault();
        const projSection = document.getElementById('projSection');
        projSection.scrollIntoView({ behavior: 'smooth' });
    });
});
