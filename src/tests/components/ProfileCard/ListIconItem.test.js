import { shallow } from "enzyme";
import { ListIconItem } from "../../../components/ProfileCard/ListIconItem";

describe('Test <ListIconItem />', () => { 
    test('should render correctly', () => { 
        const wrapper = shallow(
            <ListIconItem 
                name={'location'}
                value={'Chicago'}
            />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('title').text()).toBe('location');
        expect(wrapper.find('span').text()).toBe('Chicago');
    });

    test('should add an anchor tag when it is a website', () => { 
        const wrapper = shallow(
            <ListIconItem 
                name={'website'}
                value={'https://juanbonilla.me'}
            />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('title').text()).toBe('website');
        expect(wrapper.find('a').text()).toBe('https://juanbonilla.me');
    });

    test('should add "disable" datatype and "Not Available" when there is no value', () => { 
        const wrapper = shallow(
            <ListIconItem 
                name={'company'}
                value={''}
            />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.list__item').prop('datatype')).toBe('disabled');
        expect(wrapper.find('title').text()).toBe('company');
        expect(wrapper.find('span').text()).toBe('Not Available');
    });
});