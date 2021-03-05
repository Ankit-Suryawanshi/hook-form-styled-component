/* eslint-disable import/prefer-default-export */
export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const REQUEST_PROFILE = "REQUEST_PROFILE";
export const REQUEST_TASK = "REQUEST_TASK";
export const REQUSET_DEVELOPER = "REQUSET_DEVELOPER";

export const requestLogin = (item) => ({ type: REQUEST_LOGIN, item });
export const requestProfile = (item) => ({ type: REQUEST_PROFILE, item });
export const requestTask = (item) => ({ type: REQUEST_TASK, item });
export const requestDeveloper = (item) => ({ type: REQUSET_DEVELOPER, item });

export const SET_LOGED_USER = "SET_LOGED_USER";

export const setLogedUser = (item) => ({ type: SET_LOGED_USER, item });
