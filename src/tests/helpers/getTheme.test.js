import { localStorageMock } from "../mocks/localStorage.mock";
import { getTheme } from "../../helpers/getTheme";

describe('Test getTheme()', () => { 
    
    beforeEach(() => {
        localStorageMock.clear();
    });
    
    afterAll(() => {
        global.matchMedia = undefined;
        localStorageMock.clear();
    })
    
    test('should set a dark theme based on localStorage, even if system theme preference is set to "light"', () => { 
        localStorageMock.setItem('theme', 'dark');

        // Match media mock idea taken from:
        // https://issuehunt.io/r/ant-design/ant-design/issues/21096
        // Set default system theme to light
        global.matchMedia = () => ({ matches: true });

        expect(getTheme()).toBe('dark');

    });

    test('should set dark theme if system theme preference is set to "dark" and localStorage is empty', () => { 
        global.matchMedia = () => ({ matches: false });

        expect(getTheme()).toBe('dark');
    });
});