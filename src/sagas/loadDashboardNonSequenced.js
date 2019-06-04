import { call, put, select, take } from 'redux-saga/effects';
import { loadDeparture, loadFlight, loadForecast } from './appCalls';

export const getUserFromState = state => state.user;

export function* loadDashboardNonSequenced() {
    try {
        yield take('FETCH_USER_SUCCESS');
        const user = yield select(getUserFromState);
        const departure = yield call(loadDeparture, user);
        const [flight, forecast] = yield [
            call(loadFlight, departure.flightID),
            call(loadForecast, departure.date)
        ];

        yield put({type: 'FETCH_DASHBOARD2_SUCCESS', payload: { departure, flight, forecast }});
    } catch (e) {
        yield put({ type: 'FETCH_FAILED', error: e.message })
    }
}