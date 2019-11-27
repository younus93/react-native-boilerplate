import constant from './constant'

export function loginUser(data, cb) {
  return {
    type: constant.LOGIN_USER,
    data,
    cb
  }
}

export function loginUserSuccess(response) {
  return {
    type: constant.LOGIN_USER_SUCCESS,
    response
  }
}

export function loginUserError(error) {
  return {
    type: constant.LOGIN_USER_ERROR,
    error
  }
}