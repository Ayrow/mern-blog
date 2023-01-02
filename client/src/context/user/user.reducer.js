import { SETUP_USER_SUCCESS } from '../actions';

const userReducer = (state, action) => {
  switch (action.type) {
    case SETUP_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    default:
      throw new Error(`There is no action: ${action.type}`);
  }
};

export default userReducer;
