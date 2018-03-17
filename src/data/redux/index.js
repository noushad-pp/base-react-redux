import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import page_details from './page_details/reducers';
import user_details from './user_details/reducers';

const rootReducer = combineReducers({
    page_details,
    user_details,
    routing: routerReducer
});

export default rootReducer;
