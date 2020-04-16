
const button = document.getElementsByClassName('button-theme')[0];
const switchThemeMode = () => {
    const body = document.body;
    const theme = body.getAttribute('data-theme');

    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isLightMode = window.matchMedia("(prefers-color-scheme: light)").matches;

    let newTheme = null;

    if(isDarkMode && !theme) {
        newTheme = 'light';
    }

    if(isLightMode && !theme) {
        newTheme = 'dark';
    }

    if(!isLightMode && !isDarkMode && !theme) {
        newTheme = 'dark';
    }

    if(theme) {
        newTheme = theme === "light" ? 'dark' : 'light';
    } 

    body.setAttribute('data-theme', newTheme);
};

button.addEventListener('click', switchThemeMode);