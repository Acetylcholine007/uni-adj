import React, { createContext, useReducer } from "react";

export const OrderContext = createContext();

const reducer = (state, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "ADD_ORDER":
      let orderId =
        newState.orders.length !== 0
          ? parseInt(newState.orders.at(-1).orderId) + 1
          : 1;
      newState.orders.push({ orderId: orderId.toString(), ...action.payload });
      return newState;
    case "EDIT":
      //TODO: add edit order statement
      return newState;
    case "DELETE":
      //TODO: add remove order statement
      return newState;
    case "SET_ORDER_STATUS":
      console.log(action.payload);
      let order = newState.orders.find(
        (item) => item.orderId === action.payload.orderId
      );
      order.status = action.payload.status;
      return newState;
    default:
      return state;
  }
};

const OrderContextProvider = ({ children }) => {
  const [order, orderDispatch] = useReducer(reducer, {
    orders: [
      {
        orderId: "1",
        userId: "1",
        date: "1/8/2022",
        list: [{ productId: "1", quantity: 1 }],
        status: "Shipped",
        convo: [],
      },
    ],
  });

  return (
    <OrderContext.Provider value={{ order, orderDispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
