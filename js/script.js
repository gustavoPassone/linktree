document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const lightIcon = themeToggle.querySelector('.light-icon');
    const darkIcon = themeToggle.querySelector('.dark-icon');

    //aplicar o tema
    function applyTheme(isDarkMode) {
        if (isDarkMode) {
            body.classList.add('dark-mode');
            lightIcon.style.display = 'none';
            darkIcon.style.display = 'inline';
        } else {
            body.classList.remove('dark-mode');
            lightIcon.style.display = 'inline';
            darkIcon.style.display = 'none';
        }
    }

    //mudar de tema
    themeToggle.addEventListener('click', () => {
        const isDarkMode = body.classList.contains('dark-mode');
        //inverte o tema atual
        applyTheme(!isDarkMode);
    });
});