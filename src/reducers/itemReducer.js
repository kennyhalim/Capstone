const initState = {};

const itemReducer = (state = initState, action) => {
  let newState;
  let newArray;
  switch (action.type) {
    case "RECEIVE_ITEM":
      newState = Object.assign({}, state);
      newState[action.item.id] = action.item;
      return newState;
    default:
      return state;
  }
};

export default itemReducer;
