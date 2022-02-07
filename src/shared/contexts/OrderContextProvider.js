import React, { createContext, useReducer } from "react";

export const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    let newState = {...state};
    let index;
    switch (action.type) {
      case "ADD_ORDER":
        let orderId = parseInt(newState.orders[-1].orderId) + 1;
        newState.users[index].orders.push({orderId, ...action.payload.item});
        return newState;
      case "EDIT":
        //TODO: add edit order statement
        return newState;
      case "DELETE":
        //TODO: add remove order statement
        return newState;
      default:
        return state;
    }
  };

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
