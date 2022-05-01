import { types } from "../types/types";

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

export const userReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.setUserData:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    };
};