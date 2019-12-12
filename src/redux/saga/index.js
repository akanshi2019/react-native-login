import {watchLogin} from './Login/loginSaga';
import {all} from 'redux-saga/effects';

const rootSaga = function* rootSaga() {
  yield all([watchLogin()]);
};
export default rootSaga;
