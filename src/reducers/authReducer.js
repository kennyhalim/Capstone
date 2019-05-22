const initState = {
  authError: null,
  authenticated: false,
  user: null
};

const authReducer = (state = initState, action) => {
  let newState;
  let newArray;
  switch (action.type) {
    case "LOGIN_ERROR":
      newState = Object.assign({}, state, { authError: "error" });
      return newState;
    case "LOGIN_SUCCESS":
      newState = Object.assign({}, state, {
        authError: null,
        authenticated: true,
        user: action.credentials.userId
      });
      return newState;
    case "SIGNOUT_SUCCESS":
      newState = Object.assign({}, state, {
        authenticated: false,
        user: null
      });
      return newState;
    case "RECEIVE_ITEM":
      newState = Object.assign({}, state);
      newState[action.item.id] = action.item;
      return newState;
    case "SIGNUP_SUCCESS":
      console.log("Signup success");
      newState = Object.assign({}, state, {
        authError: null
      });
      return newState;
    case "SIGNUP_ERROR":
      console.log("Signup error");
      newState = Object.assign({}, state, {
        authError: action.err.message
      });
      return newState;
    default:
      return state;
  }
};

export default authReducer;
