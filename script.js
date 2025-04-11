document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
