import configureStore from 'redux-mock-store';
import { setUserData } from '../../actions/user';
import { types } from '../../types/types';

const mockStore = configureStore([]);

const initialState = {
    avatar: 'test_avatar.jpg',
    name: 'test user',
    at: 'testuser',
};

describe('Test user.js actions', () => { 
    test('should return the desired data when executing the action directly', () => {
        expect( setUserData(initialState) ).toEqual({
            type: types.setUserData,
            payload: initialState
        });
    });

    test('should dispatch the actions in the store with correct values', () => {
        const store = mockStore(initialState);
        
        store.dispatch( setUserData(initialState) );

        const newData = {
            avatar: 'test_image.jpg',
            name: 'test user octocat',
            at: 'attestuser',
        }

        store.dispatch( setUserData(newData) );

        const [ action1, action2 ] = store.getActions();

        expect(action1).toEqual({
            type: types.setUserData,
            payload: initialState
        });

        expect(action2).toEqual({
            type: types.setUserData,
            payload: newData
        });
    });
});