import userConstant from '../action/userAction/constant';
import { put } from 'redux-saga/effects'
// import userService from  '../service/userService';

export function* loginUser (action) {
  try {
    const {data, cb} = action;
    if(data.email === 'dev' && data.password === 'dev') {
      cb('login');
    } else {
      cb('invalid')
    }
    const response = ''
    // const data = yield call(userService)
    yield put({ type: userConstant.LOGIN_USER_SUCCESS, response })
  } catch (e) {
    yield put({ type: userConstant.LOGIN_USER_ERROR, e })
  }
}