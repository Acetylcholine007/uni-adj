import React, { createContext, useReducer } from "react";

export const OrderContext = createContext();

const reducer = (state, action) => {
  console.log(action.payload);
  let newState = { ...state };
  let order = newState.orders.find(
    (item) => item.orderId === action.payload.orderId
  );
  switch (action.type) {
    case "ADD_ORDER":
      let orderId =
        newState.orders.length !== 0
          ? parseInt(newState.orders.at(-1).orderId) + 1
          : 1;
      newState.orders.push({ orderId: orderId.toString(), ...action.payload });
      return newState;
    case "DELETE":
      newState.orders.filter((item) => item.orderId !== action.payload);
      return newState;
    case "SET_ORDER_STATUS":
      order.status = action.payload.status;
      return newState;
    case "ATTACH_MESSAGE":
      order.convo.push({
        userId: action.payload.userId,
        message: action.payload.message,
        datetime: action.payload.datetime,
      });
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
