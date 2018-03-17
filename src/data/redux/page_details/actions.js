import actionTypes from '../action_types';
import * as API from '../../config/api';

export function setLang(lang) {
    return function (dispatch) {
        dispatch({
            type: actionTypes.SYST_LANG_SET,
            payload: {
                lang: lang
            }
        });
    };
}

export function setDeviceData(device_data) {
    return function (dispatch) {
        dispatch({
            type: actionTypes.DEVICE_DATA_LOADED,
            payload: {
                device_data: device_data
            }
        });
    };
}

export function pageChanged(page) {
    return function (dispatch) {
        dispatch({
            type: actionTypes.PAGE_CHANGED,
            payload: {
                current_page: page
            }
        });
    };
}

export function getHomePage() {
    return function (dispatch) {
        dispatch({
            type: actionTypes.GET_HOME_PAGE,
            payload: API.getHomePage()
        });
    };
}
