import { call, put, select, take } from 'redux-saga/effects';
import { loadDeparture,  loadFlight, loadForecast} from './appCalls';

export const getUserFromState = state => state.user;

export function* loadDashboardSequenced() {
    try {
        yield take('FETCH_USER_SUCCESS');
        const user = yield select(getUserFromState);
        const departure = yield call(loadDeparture, user);
        const flight = yield call(loadFlight,departure.flightID);
        const forecast = yield call(loadForecast, departure.data);
        yield put({ type: 'FETCH_DASHBOARD_SUCCESS', payload: {forecast, flight, departure} });
    } catch (e) {
        yield put({ type: 'FETCH_FAILED', error: e.message})
    }
}