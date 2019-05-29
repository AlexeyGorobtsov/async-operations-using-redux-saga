import { call, put } from 'redux-saga/effects';
import { loadUser as getUser } from './appCalls';

export function* loadUser() {
    try {
        const user = yield call(getUser);
        yield put({ type: 'FETCH_USER_SUCCESS', payload: user });
        yield
    } catch (e) {
        yield put({ type: 'FETCH_FAILED', e})
    }
}