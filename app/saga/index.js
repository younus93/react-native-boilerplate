import { takeEvery } from 'redux-saga/effects';
import constant from '../action/userAction/constant';
import { loginUser } from './userSaga';

export default function* saga() { 
  yield takeEvery(constant.LOGIN_USER, loginUser);
}