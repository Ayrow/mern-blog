import { SETUP_USER_SUCCESS, LOGOUT_USER_SUCCESS } from '../actions';

const userReducer = (state, action) => {
  switch (action.type) {
    case SETUP_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        user: null,
        token: null,
      };
    default:
      throw new Error(`There is no action: ${action.type}`);
  }
};

export default userReducer;
