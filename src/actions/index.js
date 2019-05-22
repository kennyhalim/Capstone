import constants from "./../constants";
const { firebaseConfig, c } = constants;
import Firebase from "firebase";

firebase.initializeApp(firebaseConfig);
const users = firebase.database().ref("users");

export const signIn = credentials => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        console.log("success");
        dispatch({ type: "LOGIN_SUCCESS", credentials });
      })
      .catch(err => {
        console.log("error");
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Signout success");
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

export const addToCart = (itemInfo, userId) => {
  return () => {
    const currentUser = firebase.database().ref("users/" + userId + "/cart");
    const admin = firebase.database().ref("admin/orders");

    currentUser.push({ item: itemInfo });
    admin.push({ userId: userId, item: itemInfo });
  };
};

export function watchFirebaseCartRef(userId) {
  return function(dispatch) {
    const currentUser = firebase.database().ref("users/" + userId + "/cart");
    currentUser.on("child_added", data => {
      const newItem = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveItem(newItem));
    });
    currentUser.on("child_removed", data => {
      dispatch(receiveDeletedEvent(data.getKey()));
    });
  };
}

function receiveItem(itemFromFirebase) {
  return {
    type: "RECEIVE_ITEM",
    item: itemFromFirebase
  };
}

function receiveDeletedEvent(itemFromFirebase) {
  return {
    type: "RECEIVE_DELETED_ITEM",
    itemId: itemFromFirebase
  };
}

export function deleteItem(itemId, userId) {
  /*eslint-disable */
  const itemToDelete = firebase
    .database()
    .ref("users/" + userId + "/cart/" + itemId);

  /*eslint-enable */
  return () => itemToDelete.remove();
}
