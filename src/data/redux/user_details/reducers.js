import actionTypes from '../action_types';
import initialStates from './states';

export default function user_details(state = initialStates.user_details, action) {
    switch (action.type) {
        case actionTypes.USER_LOGIN: {
            return {
                ...state,
                user: {
                    name: "John Doe"
                }
            };
        }

        default:
            return state;
    }
}
