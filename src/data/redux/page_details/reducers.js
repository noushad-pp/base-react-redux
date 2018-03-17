import actionTypes from '../action_types';
import initialStates from './states';

export default function page_details(state = initialStates.page_details, action) {
    switch (action.type) {
        case actionTypes.SYST_LANG_SET: {
            return {
                ...state,
                lang: action.payload.lang
            };
        }

        case actionTypes.DEVICE_DATA_LOADED: {
            return {
                ...state,
                device_data: action.payload.device_data
            };
        }

        case actionTypes.PAGE_CHANGED: {
            return {
                ...state,
                current_page: action.payload.current_page,
            };
        }

        case `${actionTypes.GET_HOME_PAGE}_PENDING`: {
            return {
                ...state,
                loaders: {
                    ...state.loaders,
                    homepage_loading: true,
                    homepage_loaded: false,
                    homepage_load_err: false
                }
            };
        }

        case `${actionTypes.GET_HOME_PAGE}_FULFILLED`: {
            return {
                ...state,
                home_page_data: action.payload,
                loaders: {
                    ...state.loaders,
                    homepage_loading: false,
                    homepage_loaded: true,
                    homepage_load_err: false
                }
            };
        }

        case `${actionTypes.GET_HOME_PAGE}_REJECTED`: {
            return {
                ...state,
                home_page_data: action.payload,
                loaders: {
                    ...state.loaders,
                    homepage_loading: false,
                    homepage_loaded: false,
                    homepage_load_err: true
                }
            };
        }

        case actionTypes.USER_LOGIN: {
            return {
                ...state,
                user_logged_in: true
            };
        }

        default:
            return state;
    }
}
