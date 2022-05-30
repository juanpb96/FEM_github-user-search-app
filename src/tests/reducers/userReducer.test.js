import { setUserData } from "../../actions/user";
import { userReducer } from "../../reducers/userReducer";

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

describe('Test userReducer', () => { 
    test('should return the user data with updated values and default ones', () => { 
        const newUserData = {
            bio: 'Tests user bio',
            location: 'Chicago',
            name: 'The Octocat test',
        };

        const resp = userReducer(initialState, setUserData(newUserData));

        expect(resp).toEqual({
            ...initialState,
            ...newUserData
        });
        expect(resp.following).toBe(initialState.following);
        expect(resp.name).toBe(newUserData.name);
    });

    test('should return the default state if action type is not provided', () => { 
        const resp = userReducer(initialState, '');
        
        expect(resp).toEqual(initialState);
    });
});