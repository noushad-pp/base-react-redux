import actionTypes from '../action_types';

export function login() {
    return function (dispatch) {
        dispatch({
            type: actionTypes.USER_LOGIN
        });
    };
}
