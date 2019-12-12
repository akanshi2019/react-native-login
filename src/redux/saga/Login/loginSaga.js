import {put, takeEvery, call} from 'redux-saga/effects';
import ApiCaller from '../../APICallerAccount';
// import console = require('console');

const attemptLogin = payload => {
  return ApiCaller('api/login', 'post', payload.body).then(response => {
    return response;
  });
};

export const watchLogin = function* watchLogin() {
  yield takeEvery('DO_LOGIN', function*(action) {
    yield put({type: 'DO_LOGIN_STARTED'});
    try {
      const loginData = yield call(attemptLogin.bind(this, action.payload));
      // console.log('666666666666', loginData);
      yield put({type: 'DO_LOGIN_SUCCESS', payload: loginData});
    } catch (error) {
      yield put({type: 'DO_LOGIN_FAILED', payload: error});
    }
  });
};
// export default watchLogin;
