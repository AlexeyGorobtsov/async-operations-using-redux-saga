import { combineReducers } from 'redux';

import { user } from './userReducer';
import { dashboard, dashboard2, dashboard3 } from './dashboardReducer';

export const rootReducer = combineReducers({
    user,
    dashboard,
    dashboard2,
    dashboard3,
});