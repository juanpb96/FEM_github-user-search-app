import { shallow } from "enzyme";
import { ThemeButton } from "../../../components/ThemeButton/ThemeButton";
import { localStorageMock } from "../../mocks/localStorage.mock";

describe('Test <ThemeButton />', () => { 
    beforeEach(() => {
        localStorageMock.clear();
        global.matchMedia = undefined;
    })

    test('should render correctly', () => { 
        global.matchMedia = () => ({ matches: true });

        const wrapper = shallow(<ThemeButton />);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.theme-toggle__name').text()).toBe('dark');
    });

    test('should change theme from "light" to "dark" when user preferences is set to "light"', () => {       
        global.matchMedia = () => ({ matches: true });

        const wrapper = shallow(<ThemeButton />);

        expect(wrapper.find('.theme-toggle__name').text()).toBe('dark');

        wrapper.find('.theme-toggle').simulate('click');

        expect(wrapper.find('.theme-toggle__name').text()).toBe('light');
    });

    test('should change theme from "dark" to "light" when localStorage is set to "dark" and user preferences is set to "light"', () => { 
        localStorageMock.setItem('theme', 'dark');
        global.matchMedia = () => ({ matches: true });

        const wrapper = shallow(<ThemeButton />);
   
        expect(wrapper.find('.theme-toggle__name').text()).toBe('light');

        wrapper.find('.theme-toggle').simulate('click');

        expect(wrapper.find('.theme-toggle__name').text()).toBe('dark');
    });
});