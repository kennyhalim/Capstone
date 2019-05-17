const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      let newState = Object.assign({}, state, { authError: "error" });
      return newState;
    case "LOGIN_SUCCESS":
      return state;
    default:
      return state;
  }
};

export default authReducer;
