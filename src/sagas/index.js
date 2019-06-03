import  takeLatest  from 'redux-saga';
import { fork } from 'redux-saga/effects'

import { loadUser} from './loadUser';
import { loadDashboardSequenced } from './loadDashboardSequenced';
import { loadDashboardNonSequenced } from './loadDashboardNonSequenced';
import { loadDashboardNonSequencedNonBlocking, isolatedForecast, isolatedFlight } from './loadDashboardNonSequencedNonBlocking';


export function* rootSaga() {
    yield [
        fork(loadUser),
        takeLatest('LOAD_DASHBOARD', loadDashboardSequenced),
        takeLatest('LOAD_DASHBOARD_NON_SEQUENCED', loadDashboardNonSequenced),
        takeLatest('LOAD_DASHBOARD_NON_SEQUENCED_NON_BLOCKING', loadDashboardNonSequencedNonBlocking),
        fork(isolatedForecast),
        fork(isolatedFlight)
    ];
}