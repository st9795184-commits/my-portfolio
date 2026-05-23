const roles = ["Full Stack Developer", "UI/UX Designer", "AI Enthusiast"];
let i = 0, j = 0, isDeleting = false;
const typedTextSpan = document.querySelector(".typed-text");

function typeEffect() {
    const current = roles[i];
    if (isDeleting) typedTextSpan.innerText = current.substring(0, j--);
    else typedTextSpan.innerText = current.substring(0, j++);

    if (!isDeleting && j === current.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
    }
    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % roles.length;
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();

// Skill Bars Animation
const skillBars = document.querySelectorAll('.skill-bar-fill');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.getAttribute('data-width');
            entry.target.style.width = width + '%';
        }
    });
}, { threshold: 0.5 });
skillBars.forEach(bar => observer.observe(bar));

// Custom Cursor (Optional)
const cursor = document.querySelector('.cursor-follower');
document.addEventListener('mousemove', (e) => {
    if (cursor) cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Smooth Scroll for Nav Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

console.log("%c🔥 Modern Portfolio Loaded! 🔥", "color: #667eea; font-size: 16px;");