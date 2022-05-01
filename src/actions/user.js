import { getUser } from "../helpers/getUser";
import { types } from "../types/types";

export const setUserData = (userData) => ({
    type: types.setUserData,
    payload: userData
});