const savedTheme = localStorage.getItem('theme');
const preferredTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
document.documentElement.dataset.theme = savedTheme || preferredTheme;

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeLabel = themeToggle.querySelector('span');

    function updateThemeToggle(theme) {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        themeToggle.setAttribute('aria-label', `Switch to ${nextTheme} theme`);
        themeLabel.textContent = `${nextTheme === 'light' ? 'Light' : 'Dark'} mode`;
    }

    updateThemeToggle(document.documentElement.dataset.theme);

    themeToggle.addEventListener('click', () => {
        const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = nextTheme;
        localStorage.setItem('theme', nextTheme);
        updateThemeToggle(nextTheme);
    });
});
