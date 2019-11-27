import userConstant from '../action/userAction/constant';

const initialState = {
  userData: {}
}

export default function userReducer (state = initialState, action) {
  switch (action.type) {
    case userConstant.LOGIN_USER:
      return {
        ...state,
        userData: {}
      }
    default:
      return state
  }
}