import  { takeLatest } from 'redux-saga/effects';
import { fork } from 'redux-saga/effects'

import { loadUser} from './loadUser';
import { loadDashboardSequenced } from './loadDashboardSequenced';
import { loadDashboardNonSequenced } from './loadDashboardNonSequenced';
import { loadDashboardNonSequencedNonBlocking, isolatedForecast, isolatedFlight } from './loadDashboardNonSequencedNonBlocking';


export function* rootSaga() {
        yield fork(loadUser);
        yield takeLatest('LOAD_DASHBOARD', loadDashboardSequenced);
        yield takeLatest('LOAD_DASHBOARD_NON_SEQUENCED', loadDashboardNonSequenced);
        yield takeLatest('LOAD_DASHBOARD_NON_SEQUENCED_NON_BLOCKING', loadDashboardNonSequencedNonBlocking);
        yield fork(isolatedForecast);
        yield fork(isolatedFlight);

}