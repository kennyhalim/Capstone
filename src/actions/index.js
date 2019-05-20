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
    console.log(userId);
    console.log(itemInfo);
    const currentUser = firebase.database().ref("users/" + userId + "/cart");
    const admin = firebase.database().ref("admin/orders");

    currentUser.push({ item: itemInfo });
    admin.push({ userId: userId, item: itemInfo });
  };
};
