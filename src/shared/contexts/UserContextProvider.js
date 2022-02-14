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
      const item = newState.users[index].cart.find(
        (item) => item.productId === action.payload.item.productId
      );
      if (item !== undefined) {
        item.quantity += 1;
      } else {
        newState.users[index].cart.push(action.payload.item);
      }
      return newState;
    case "REMOVE_CART":
      index = newState.users.indexOf(
        newState.users.find((user) => user.userId === action.payload.userId)
      );
      newState.users[index].cart = newState.users[index].cart.filter(
        (item) => item.productId !== action.payload.productId
      );
      return newState;
    case "CHANGE_QUANTITY":
      index = newState.users.indexOf(
        newState.users.find((user) => user.userId === action.payload.userId)
      );
      let targetItem = newState.users[index].cart.find(
        (i) => action.payload.productId === i.productId
      );
      console.log(targetItem)
      console.log(action.payload.quantity)
      targetItem.quantity = action.payload.quantity;
      return newState;
    case "SET_SELECTED_ITEMS":
      index = newState.users.indexOf(
        newState.users.find((user) => user.userId === action.payload.userId)
      );
      console.log(action.payload.selectedItems);
      newState.users[index].selectedItems = action.payload.selectedItems;
      return newState;
    case "REMOVE_CART_MANY":
      index = newState.users.indexOf(
        newState.users.find((user) => user.userId === action.payload.userId)
      );
      let productIds = action.payload.currentSelectedItems.map(
        (item) => item.productId
      );
      newState.users[index].cart = newState.users[index].cart.filter(
        (item) => !productIds.includes(item.productId)
      );
      newState.users[index].selectedItems = newState.users[
        index
      ].selectedItems.filter((item) => !productIds.includes(item.productId));
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
          { productId: "3", quantity: 1 },
          { productId: "7", quantity: 2 },
          { productId: "1", quantity: 3 },
        ],
        selectedItems: [],
      },
      {
        userId: "2",
        username: "Ivy",
        firstname: "Ivy Marisse",
        lastname: "Castro",
        email: "ivy@gmail.com",
        password: "1234",
        accountType: 2,
        address: "Philippines",
        contactNo: "09212734539",
        profileUri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxKQVIo8RiDEsn6Eq0eiFps6FbeZEs-unfuA&usqp=CAU",
        cart: [
          { productId: "4", quantity: 1 },
          { productId: "8", quantity: 2 },
          { productId: "9", quantity: 3 },
        ],
        selectedItems: [],
      },
      {
        userId: "3",
        username: "JP",
        firstname: "John Paul",
        lastname: "Cervantes",
        email: "jp@gmail.com",
        password: "1234",
        accountType: 2,
        address: "Philippines",
        contactNo: "09212734539",
        profileUri:
          "https://freshpointlocal.co.uk/wp-content/uploads/2018/12/WaterMelon-1.jpg",
        cart: [
          { productId: "6", quantity: 1 },
          { productId: "3", quantity: 2 },
          { productId: "1", quantity: 3 },
        ],
        selectedItems: [],
      },
      {
        userId: "4",
        username: "Wendel",
        firstname: "Wendell",
        lastname: "Inovero",
        email: "wendel@gmail.com",
        password: "1234",
        accountType: 2,
        address: "Philippines",
        contactNo: "09212734539",
        profileUri:
          "https://www.nipponexpress.com/press/report/img/06-Nov-20-ogp.jpeg",
        cart: [
          { productId: "3", quantity: 1 },
          { productId: "8", quantity: 2 },
          { productId: "5", quantity: 3 },
        ],
        selectedItems: [],
      },
      {
        userId: "5",
        username: "Sofia",
        firstname: "Sofia Ann",
        lastname: "Ondra",
        email: "sofia@gmail.com",
        password: "1234",
        accountType: 2,
        address: "Philippines",
        contactNo: "09212734539",
        profileUri:
          "https://www.tasteofhome.com/wp-content/uploads/2019/02/pineapples_1283638660.jpg?fit=700,700",
        cart: [
          { productId: "9", quantity: 1 },
          { productId: "7", quantity: 2 },
          { productId: "10", quantity: 3 },
        ],
        selectedItems: [],
      },
      {
        userId: "6",
        username: "Rahino",
        firstname: "Rahino",
        lastname: "Quijano",
        email: "rahino@gmail.com",
        password: "1234",
        accountType: 2,
        address: "Philippines",
        contactNo: "09212734539",
        profileUri:
          "https://images.immediate.co.uk/production/volatile/sites/30/2019/06/kiwi-aedbdbf.jpg?quality=90&resize=556,505",
        cart: [
          { productId: "2", quantity: 1 },
          { productId: "5", quantity: 2 },
          { productId: "4", quantity: 3 },
        ],
        selectedItems: [],
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
