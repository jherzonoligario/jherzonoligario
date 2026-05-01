// A simple greeting for anyone inspecting your code
console.log("Welcome to Jherzon's Portfolio!");

// Example: Change nav background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = '#000';
    } else {
        nav.style.background = 'transparent';
    }
});