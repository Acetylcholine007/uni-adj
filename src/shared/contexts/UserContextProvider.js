import React, { createContext, useReducer } from "react";

export const UserContext = createContext();

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
      index = newState.users.indexOf(
        newState.users.find((user) => user.userId === action.payload.userId)
      );
      const item = newState.users[index].cart.find((item) => item.productId === action.payload.item.productId)
      if(item !== undefined) {
        item.quantity += 1;
      } else {
        newState.users[index].cart.push(action.payload.item);
      }
      return newState;
    case "REMOVE_CART":
      index = newState.users.indexOf(
        newState.users.find((user) => user.userId === action.payload.userId)
      );
      newState.users[index].cart = newState.users[index].cart.filter((item) => item.productId !== action.payload.productId);
      return newState;
    case "SET_SELECTED_ITEMS":
      index = newState.users.indexOf(
        newState.users.find((user) => user.userId === action.payload.userId)
      );
      newState.users[index].selectedItems = action.payload.selectedItems;
      return newState;
    default:
      return state;
  }
};

const UserContextProvider = ({ children }) => {
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
        selectedItems: [

        ]
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
