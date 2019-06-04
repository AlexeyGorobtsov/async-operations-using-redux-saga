import { call, put, select, take } from 'redux-saga/effects';

import { loadDeparture, loadFlight, loadForecast } from './appCalls';

export const getUserFromState = state => state.user;

export function* loadDashboardNonSequencedNonBlocking() {
    try {
        yield take('FETCH_USER_SUCCESS');
        const user = yield select(getUserFromState);
        const departure = yield call(loadDeparture, user);
        yield put({ type: 'FETCH_DASHBOARD3_SUCCESS', payload: { departure } });
        yield put({ type: 'FETCH_DEPARTURE3_SUCCESS' , departure });

    } catch (e) {
        yield put({ type: 'FETCH_FAILED', error: e.message })
    }
}

export function* isolatedFlight() {
    try {
        const departure = yield take('FETCH_DEPARTURE3_SUCCESS');
        const flight = yield call(loadFlight, departure.flightID);
        yield put({ type: 'FETCH_DASHBOARD3_SUCCESS', payload: { flight } });
    } catch (e) {
        yield put({ type: 'FETCH_FAILED', error: e.message });
    }
}

export function* isolatedForecast() {
    try {
        const departure = yield take('FETCH_DEPARTURE3_SUCCESS');

        const forecast = yield call(loadForecast, departure.date);
        yield put({ type: 'FETCH_DASHBOARD3_SUCCESS', payload: { forecast } });

    } catch (e) {
        yield put({ type: 'FETCH_FAILED', error: e.message });
    }
}

