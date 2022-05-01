import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../reducers/userReducer';

const reducer = {
    user: userReducer
};

// This approach uses Thunk and enables devtools extension by default
// Learn more on: https://redux-toolkit.js.org/api/configureStore
export const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
});