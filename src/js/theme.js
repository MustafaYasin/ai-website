document.addEventListener('alpine:init', () => {
    Alpine.store('theme', {
        isDark: true,
        toggle() {
            this.isDark = !this.isDark;
            this.updateTheme();
        },
        init() {
            this.isDark = localStorage.getItem('theme') === 'dark';
            this.updateTheme();
        },
        updateTheme() {
            localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
            document.documentElement.classList.toggle('light-mode', !this.isDark);
        }
    });
}); 