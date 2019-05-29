import  takeLatest  from 'redux-saga';
import { fork } from 'redux-saga/effects'
import { loadUser} from './loadUser';
import { loadDashboardSequenced } from './loadDashboardSequenced';


function* rootSaga() {
    yield {
        fork(loadUser),
    }
}