import React, { createContext, useReducer } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SIGNUP":
        return { ...state, isLoggedIn: true, accountType: action.payload };
      case "LOGIN":
        return { ...state, isLoggedIn: true, accountType: action.payload };
      case "LOGOUT":
        return { ...state, isLoggedIn: false, accountType: 0 };
      case "CHANGE_AUTH_SECTION":
        return { ...state, authSection: action.payload };
      default:
        return state;
    }
  };

  const [auth, authDispatch] = useReducer(reducer, {
    isLoggedIn: true,
    accountType: 2,
    authSection: "LOGIN",
    user: {
      username: "Acetylcholine",
      firstname: "Rahino",
      lastname: "Quijano",
      email: "test@gmail.com",
      profileUri:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ambersweet_oranges.jpg/1200px-Ambersweet_oranges.jpg",
      backgroundUri:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ambersweet_oranges.jpg/1200px-Ambersweet_oranges.jpg",
    },
  });

  return (
    <AuthContext.Provider value={{ auth, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
