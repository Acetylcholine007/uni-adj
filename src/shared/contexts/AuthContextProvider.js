import React, { createContext, useReducer } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SIGNUP":
        return { ...state, isLoggedIn: true, user: action.payload };
      case "LOGIN":
        return { ...state, isLoggedIn: true, user: action.payload };
      case "LOGOUT":
        return { ...state, isLoggedIn: false, user: null };
      case "CHANGE_AUTH_SECTION":
        return { ...state, authSection: action.payload };
      default:
        return state;
    }
  };

  const [auth, authDispatch] = useReducer(reducer, {
    isLoggedIn: true,
    authSection: "LOGIN",
    userId: "1",
  });

  return (
    <AuthContext.Provider value={{ auth, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
