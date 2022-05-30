import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { SearchBar } from '../../../components/SearchBar/SearchBar';
import { Provider } from 'react-redux';
import { setUserData } from '../../../actions/user';
import { act, waitFor } from '@testing-library/react';

jest.mock('../../../actions/user', () => ({
    setUserData: jest.fn()
}));

const mockStore = configureStore([]);

const store = mockStore();
store.dispatch = jest.fn();

describe('Test <SearchBar />', () => { 
    const wrapper = mount(
        <Provider store={store}>
            <SearchBar />
        </Provider>
    );

    afterEach(() => {
        global.fetch = undefined;
    })

    test('should render correctly', () => {     
        expect(wrapper).toMatchSnapshot();
    });

    test('should call setUserData action and get the response correctly', async() => { 
        const mockResponse = {
            name: 'octocat',
            bio: null,
            company: '@github'
        };

        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockResponse),
            })
        );

        await wrapper.find('form').prop('onSubmit')({ preventDefault(){} });

        expect(setUserData).toHaveBeenCalledTimes(1);
        expect(setUserData).toHaveBeenCalledWith(mockResponse);
    });

    test('should not call setUserData if the user does not exist and display an error', async() => { 
        const mockResponse = {
            message: 'Not Found'
        };
        
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockResponse),
            })
        );

        await act(async() => wrapper.find('form').prop('onSubmit')({ preventDefault(){} }));

        expect(setUserData).not.toHaveBeenCalled();
        expect(
            wrapper
            .find('.search-bar__error')
            .html()
            .includes('datatype="active"')
        ).toBe(true);
    });
});