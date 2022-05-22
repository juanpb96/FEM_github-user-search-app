// localStorageMock taken from:
// https://stackoverflow.com/questions/32911630/how-do-i-deal-with-localstorage-in-jest-tests
export const localStorageMock = (function() {
    let store = {};
    
    return {
        getItem(key) {
            return store[key];
        },
        setItem(key, value) {
            store[key] = value;
        },
        clear() {
            store = {};
        },
    };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });