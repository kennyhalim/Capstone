const initState = {
  authError: null,
  authenticated: false
};

const authReducer = (state = initState, action) => {
  let newState;
  switch (action.type) {
    case "LOGIN_ERROR":
      newState = Object.assign({}, state, { authError: "error" });
      return newState;
    case "LOGIN_SUCCESS":
      newState = Object.assign({}, state, {
        authError: null,
        authenticated: true
      });
      return newState;
    default:
      return state;
  }
};

export default authReducer;
