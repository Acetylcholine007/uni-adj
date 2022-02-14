import React, { createContext, useReducer } from "react";

export const AuthContext = createContext();

const reducer = (state, action) => {
  console.log("reached");
  switch (action.type) {
    case "SIGNUP":
      return { ...state, isLoggedIn: true, userId: action.payload };
    case "LOGIN":
      return { ...state, isLoggedIn: true, userId: action.payload };
    case "LOGOUT":
      return { ...state, isLoggedIn: false, userId: null };
    case "CHANGE_AUTH_SECTION":
      return { ...state, authSection: action.payload };
    case "TOGGLE_MODAL":
      return { ...state, showAuthModal: action.payload };
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [auth, authDispatch] = useReducer(reducer, {
    isLoggedIn: false,
    authSection: "LOGIN",
    userId: null,
    showAuthModal: false,
  });

  return (
    <AuthContext.Provider value={{ auth, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
