export const getTheme = () => {
    const localTheme = localStorage.getItem('theme');
    const isSystemLightTheme = window.matchMedia("(prefers-color-scheme: light)").matches;
    const systemTheme = isSystemLightTheme ? 'light' : 'dark';

    const userTheme = localTheme ? localTheme : systemTheme;

    return userTheme;
};