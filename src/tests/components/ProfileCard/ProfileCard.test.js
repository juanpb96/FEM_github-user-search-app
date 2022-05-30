import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { ProfileCard } from '../../../components/ProfileCard/ProfileCard';

const mockStore = configureStore([]);

const initialState = {
    login: 'octocat',
    avatar_url: null,
    bio: null,
    blog: 'https://github.blog',
    company: '@github',
    followers: 3938,
    following: 9,
    created_at: '2011-01-25T18:44:36Z',
    location: 'San Francisco',
    name: 'The Octocat',
    public_repos: 8,
    twitter: null
};

describe('Test <ProfileCard />', () => {
    test('should render correctly', () => { 
        const store = mockStore({ user: initialState });

        const wrapper = mount(
            <Provider store={store}>
                <ProfileCard />
            </Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.profile__photo').prop('src')).toContain('avatar-default.png');
        expect(wrapper.find('.profile__description').text()).toBe('This profile has no bio');
        expect(wrapper.find('.list').children().length).toBe(4);
    });
    
    test('should show user photo and bio correctly', () => {
        const userValues = {
            ...initialState,
            avatar_url: 'myTestPhoto.jpg',
            bio: 'This is my test bio'
        };

        const store = mockStore({ user: userValues });
        
        const wrapper = mount(
            <Provider store={store}>
                <ProfileCard />
            </Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.profile__photo').prop('src')).toBe(userValues.avatar_url);
        expect(wrapper.find('.profile__description').text()).toBe(userValues.bio);
        expect(wrapper.find('.list').children().length).toBe(4);
    });
});