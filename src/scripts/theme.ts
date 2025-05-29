export function getPreferredTheme(): string {
    if (localStorage.getItem('theme')) {
        return localStorage.getItem('theme')!;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function setTheme(theme: string) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const icon = document.getElementById('theme-icon');
    if (icon) {
        icon.textContent = theme === 'dark' ? '🌙' : '😎';
    }
}

export function setupThemeToggle() {
    setTheme(getPreferredTheme());
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.onclick = function () {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(nextTheme);
        };
    }
}

document.addEventListener('DOMContentLoaded', setupThemeToggle);