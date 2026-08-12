document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});


document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // Just letting you know it's working
        console.log('Opening project: ' + this.textContent);
    });
});

console.log('Hey! Thanks for checking out my portfolio ✌️');

