import React, { createContext, useReducer } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    let newState = { ...state };
    let index;
    switch (action.type) {
      case "ADD":
        return { ...state, users: [...state.users, action.payload] };
      case "UPDATE":
        index = newState.users.indexOf(
          newState.users.find((user) => user.userId === action.payload.userId)
        );
        newState.users[index] = action.payload;
        return newState;
      case "ADD_CART":
        console.log(newState);
        index = newState.users.indexOf(
          newState.users.find((user) => user.userId === action.payload.userId)
        );
        newState.users[index].cart.push(action.payload.item);
        console.log(newState);
        return newState;
      default:
        return state;
    }
  };

  const [users, userDispatch] = useReducer(reducer, {
    users: [
      {
        userId: "1",
        username: "admin",
        firstname: "John",
        lastname: "Doe",
        email: "admin@gmail.com",
        password: "1234",
        accountType: 3,
        address: "Philippines",
        contactNo: "09212734539",
        profileUri:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ambersweet_oranges.jpg/1200px-Ambersweet_oranges.jpg",
        cart: [
          { productId: "1", quantity: 2 },
        ],
      },
    ],
  });

  return (
    <UserContext.Provider value={{ users, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
